// lib/booking.api.js

import axios from "axios";

export const cancelBooking = (bookingId, reason) => {
  return axios.post("http://localhost:3000/api/hotels/cancel-booking", {
    bookingId,
    reason,
  });
};
