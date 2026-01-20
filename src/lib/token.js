// export const getAccessToken = () =>
//   typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

// export const getRefreshToken = () =>
//   typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null;

// export const setTokens = ({ accessToken, refreshToken }) => {
//   if (accessToken) localStorage.setItem("accessToken", accessToken);

//   if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
// };

// export const clearTokens = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// };

// src/api/token.js

export const getAccessToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
};

export const getRefreshToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("refreshToken");
};

export const setTokens = ({ accessToken, refreshToken }) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
};

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
