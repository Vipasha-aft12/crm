import { apiRequest } from "./api";

export const loginUser = async (payload) => {
  return apiRequest("/crm-user/login", "POST", payload);
};

export const refreshToken = async (refreshToken) => {
  return apiRequest("/crm-user/refresh", "POST", { refreshToken });
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) throw new Error("No refresh token");

  return apiRequest("/crm-user/refresh", "POST", { refreshToken });
};