import { refreshAccessToken } from "./auth.api";
import { getAccessToken, setTokens, clearTokens } from "./token";

let isRefreshing = false;
let pendingQueue = [];

const processQueue = (error, token = null) => {
  pendingQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  pendingQueue = [];
};

export const fetchWithAuth = async (endpoint, options = {}) => {
  const token = getAccessToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
  // SUCCESS
  if (res.status !== 401) {
    return res.json();
  }

  // 401 → try refresh
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      pendingQueue.push({
        resolve: (newToken) => {
          options.headers.Authorization = `Bearer ${newToken}`;
          resolve(fetchWithAuth(endpoint, options));
        },
        reject,
      });
    });
  }

  isRefreshing = true;

  try {
    const data = await refreshAccessToken();

    setTokens({ accessToken: data.accessToken });

    processQueue(null, data.accessToken);

    isRefreshing = false;

    options.headers.Authorization = `Bearer ${data.accessToken}`;
    return fetchWithAuth(endpoint, options);
  } catch (err) {
    processQueue(err, null);
    clearTokens();
    window.location.href = "/";
    throw err;
  }
};
