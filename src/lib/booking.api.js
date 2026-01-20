// src/api/booking.api.js

import { fetchWithAuth } from "./fetchWithAuth";

export const getBookings = async ({ page = 1, limit = 10 } = {}) => {
  return fetchWithAuth(`/hotel/bookings?page=${page}&limit=${limit}`);
};
