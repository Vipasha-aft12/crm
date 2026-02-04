"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './BookingpMainTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BookingPageTableModal from "../bookingpagetablemodal/BookingPageTableModal";


const BookingpMainTable = ({ bookings = [] ,type}) => {
    const formatDate = (date) => (date ? new Date(date).toLocaleString() : "-");

    const getPassengerNames = (rooms = []) =>
      rooms
        .flatMap((r) => r.guests || [])
        .map((g) => `${g.first_name} ${g.last_name}`)
        .join(", ");

  return (
    <div className="container w-100">
      <div className="row w-100">
        <div className="col-12 w-100">
          <div className="table-wrapper px-2">
            <table>
              <thead>
                <tr>
                  {/* <th>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />{" "}
                    Select All
                  </th> */}
                  <th>Booking Time</th>
                  <th>Booking Status</th>
                  <th>Payment Status</th>
                  <th>Booking Id</th>
                  <th>Order Id</th>
                  <th>Total Amount</th>
                  <th>Net Fare</th>
                  {/* <th>Passenger Name</th> */}
                  {/* <th>Raise Amendment</th>
                  <th>Print Ticket</th> */}
                  <th>Hotel Name</th>
                  <th>Travel Date</th>
                  {/* <th>Time to Travel (in days)</th> */}
                  {/* <th>Logged In User Id</th>
                  <th>Booking User Id</th>
                  <th>Flow Type</th>
                  <th>Reason Processed On</th>
                  <th>Gross Amount</th> */}
                </tr>
              </thead>
              <tbody>
                {type === "hotel" ? (
                  bookings.length > 0 ? (
                    bookings.map((booking) => {
                      const rate =
                        booking.bookingHotelSnapshot?.rate?.pricing || {};

                      return (
                        <tr key={booking._id}>
                          {/* <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td> */}

                          <td>{formatDate(booking.createdAt)}</td>

                          <td>
                            <span className="badge bg-info">
                              {booking?.status ?? "-"}
                            </span>
                          </td>

                          <td>{booking?.paymentInfo?.status ?? "-"}</td>

                          <td>
                            <BookingPageTableModal booking={booking} />
                          </td>

                          <td>
                            {booking?.rawResponses?.preBooking?.data?.order_id ??
                              "-"}
                          </td>

                          <td>${rate.totalPayable?.toFixed(2) || "-"}</td>

                          <td>
                            $
                            {(
                              rate.baseFare + (rate.markup?.amount || 0)
                            )?.toFixed(2)}
                          </td>

                          {/* <td>{getPassengerNames(booking.rooms)}</td> */}

                          {/* <td>Raise Amendment</td>

                          <td>View</td> */}

                          <td>{booking.bookingHotelSnapshot?.hotel?.name}</td>

                          <td>{booking.request?.checkIn}</td>

                          {/* <td>-</td> */}

                          {/* <td>
                            {booking.bookingUser?.firstName}{" "}
                            {booking.bookingUser?.lastName}
                          </td>

                          <td>-</td>

                          <td>HOTEL</td>

                          <td>-</td>

                          <td>${rate.baseFare?.toFixed(2) || "-"}</td> */}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="19" className="text-center">
                        No hotel bookings found
                      </td>
                    </tr>
                  )
                ) : (
                  <>
                    {/* 🔽 Your EXISTING STATIC ROWS (unchanged) */}
                    <tr>
                      <td>
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Mar 2, 2025 12:34 AM</td>
                      <td>
                        <select className="form-select">
                          <option>Successful</option>
                          <option>Pending</option>
                          <option>Cancel</option>
                        </select>
                      </td>
                      <td>Success</td>
                      <td>
                        <BookingPageTableModal />
                      </td>
                      <td>6XZ57C</td>
                      <td>$3200.00</td>
                      <td>$2600.00</td>
                      <td>MR JAMES THOMAS</td>
                      <td>Raise Amendment</td>
                      <td>View</td>
                      <td>UK-373 DEL-LDR 20 Mar</td>
                      <td>Mar 9, 2025</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingpMainTable
