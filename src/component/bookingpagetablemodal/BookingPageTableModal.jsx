"use client";
import React, { useState, useId } from "react";
import "./BookingPageTableModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { bookingDetails } from "../../lib/booking.api";
import { cancelBooking } from "../../lib/cancel.api";
import CancelBookingModal from "./CancelBookingModal";
// import CancelBookingModal from "./CancelBookingModal";

const BookingPageTableModal = ({ booking = {} }) => {
  const modalId = useId().replace(/:/g, "");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
// const [cancelLoading, setCancelLoading] = useState(false);
// const [cancelError, setCancelError] = useState(null);
// const [cancelSuccess, setCancelSuccess] = useState(null);
// const [showCancelModal, setShowCancelModal] = useState(false);
const [cancelLoading, setCancelLoading] = useState(false);
const [cancelError, setCancelError] = useState(null);
const [cancelSuccess, setCancelSuccess] = useState(null);
const [showCancelModal, setShowCancelModal] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await bookingDetails(booking.bookingId);
      setDetails(res.data);
    } catch (err) {
      console.error("Booking fetch error:", err);
      setError("Failed to load booking details");
    } finally {
      setLoading(false);
    }
  };
//   const handleCancelBooking = async (reason) => {
//     try {
//       setCancelLoading(true);
//       setCancelError(null);

//       const res = await cancelBooking(booking.bookingId, reason);

//       if (res?.data?.success === false) {
//         throw new Error(res?.data?.message || "Cancellation failed");
//       }

//       setCancelSuccess("Booking cancelled successfully");
//       setShowCancelModal(false);

//       // refresh
//       await fetchDetails();
//     } catch (err) {
//       setCancelError(
//         err?.response?.data?.message || err.message || "Cancellation failed",
//       );
//     } finally {
//       setCancelLoading(false);
//     }
//   };

const handleCancelBooking = async (reason) => {
  try {
    setCancelLoading(true);
    setCancelError(null);
    setCancelSuccess(null);

    const res = await cancelBooking(booking.bookingId, reason);

    if (res?.data?.success === false) {
      throw new Error(res?.data?.message || "Cancellation failed");
    }

    setCancelSuccess("Booking cancelled successfully");
    setShowCancelModal(false);

    // refresh booking details
    await fetchDetails();
  } catch (err) {
    setCancelError(
      err?.response?.data?.message || err.message || "Cancellation failed",
    );
  } finally {
    setCancelLoading(false);
  }
};


  const rate = details?.bookingHotelSnapshot?.rate?.pricing;
  const hotel = details?.bookingHotelSnapshot?.hotel;
  const user = details?.bookingUser;
    const cancellation = details?.cancellation;
    const isCancelled = details?.status === "CANCELLED";
  const statusColor = (status) => {
    if (!status) return "secondary";
    if (status.toLowerCase().includes("confirm")) return "success";
    if (status.toLowerCase().includes("cancel")) return "danger";
    if (status.toLowerCase().includes("pending")) return "warning";
    return "primary";
  };

  {
    cancelError && (
      <div className="alert alert-danger text-center">{cancelError}</div>
    );
  }

  {
    cancelSuccess && (
      <div className="alert alert-success text-center">{cancelSuccess}</div>
    );
  }


  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        className="btn btn-sm btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        onClick={fetchDetails}
      >
        {booking.bookingId || "View"}
      </button>
      {cancelError && (
        <div className="alert alert-danger text-center">{cancelError}</div>
      )}

      {cancelSuccess && (
        <div className="alert alert-success text-center">{cancelSuccess}</div>
      )}
      {/* <CancelBookingModal
        show={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelBooking}
        loading={cancelLoading}
        bookingId={details?.bookingId}
        amount={rate?.totalPayable}
        refundable={cancellation?.refundable_amt || rate?.totalPayable}
        policyText="Supplier cancellation charges apply. Refunds processed in 5–7 working days."
      /> */}

      {/* Modal */}
      <div
        className={`modal fade enterprise-modal ${showCancelModal ? "cancel-open" : ""}`}
        id={modalId}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* ===== Sticky Header ===== */}
            <div className="modal-header enterprise-header sticky-top">
              <div>
                <h5 className="modal-title">Booking Console</h5>
                <small className="text-muted">
                  Cart ID: {details?.bookingId || "—"}
                </small>
              </div>

              <div className="d-flex gap-2">
                <span className={`badge bg-${statusColor(details?.status)}`}>
                  {details?.status || "—"}
                </span>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
            </div>

            {/* ===== Action Bar ===== */}
            <div className="enterprise-action-bar">
              <button className="action-btn">🖨 Print Ticket</button>
              <button className="action-btn">📄 Invoice</button>
              <button className="action-btn">✏️ Modify</button>
              <button className="action-btn">📦 Services</button>
              <button className="action-btn">⚙ More</button>
            </div>

            {/* ===== Body ===== */}
            <div className="modal-body enterprise-body">
              {/* Loader */}
              {loading && (
                <div className="skeleton-wrapper">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="skeleton-card" />
                  ))}
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="alert alert-danger text-center">{error}</div>
              )}

              {/* Data */}
              {!loading && details && (
                <div className="enterprise-grid">
                  {/* Summary */}
                  <section className="enterprise-card">
                    <h6 className="section-title">Summary</h6>
                    <div className="info-grid">
                      <div>
                        <span>Amount</span>
                        <b>${rate?.totalPayable}</b>
                      </div>
                      <div>
                        <span>Order Type</span>
                        <b>HOTEL</b>
                      </div>
                      <div>
                        <span>Channel</span>
                        <b>API</b>
                      </div>
                      <div>
                        <span>Created</span>
                        <b>{new Date(details?.createdAt).toLocaleString()}</b>
                      </div>
                      <div>
                        <span>Flow</span>
                        <b>Online</b>
                      </div>
                      <div>
                        <span>Order ID</span>
                        <b>
                          {details?.rawResponses?.preBooking?.data?.order_id}
                        </b>
                      </div>
                    </div>
                  </section>

                  {/* User */}
                  <section className="enterprise-card">
                    <h6 className="section-title">User</h6>
                    <div className="info-grid">
                      <div>
                        <span>Name</span>
                        <b>
                          {user?.firstName} {user?.lastName}
                        </b>
                      </div>
                      <div>
                        <span>Email</span>
                        <b>{user?.email}</b>
                      </div>
                      <div>
                        <span>Phone</span>
                        <b>{user?.phone}</b>
                      </div>
                      <div>
                        <span>Role</span>
                        <b>Booking User</b>
                      </div>
                    </div>
                  </section>

                  {/* Hotel */}
                  <section className="enterprise-card full">
                    <h6 className="section-title">Hotel</h6>
                    <p className="fw-bold">{hotel?.name}</p>
                    <p className="text-muted">
                      {hotel?.address?.address}, {hotel?.address?.city}
                    </p>
                    <div className="date-grid">
                      <div>
                        <span>Check-in</span>
                        <b>{details?.request?.checkIn}</b>
                      </div>
                      <div>
                        <span>Check-out</span>
                        <b>{details?.request?.checkOut}</b>
                      </div>
                    </div>
                  </section>

                  {/* Guests */}
                  <section className="enterprise-card full">
                    <h6 className="section-title">Guests</h6>
                    {details?.rooms?.map((room, i) => (
                      <div key={i} className="room-block">
                        <b>Room {i + 1}</b>
                        {room.guests.map((g, j) => (
                          <div key={j} className="guest-row">
                            {g.first_name} {g.last_name} ({g.age})
                          </div>
                        ))}
                      </div>
                    ))}
                  </section>

                  {/* Pricing */}
                  <section className="enterprise-card">
                    <h6 className="section-title">Pricing</h6>
                    <div className="price-grid">
                      <div>
                        <span>Base Fare</span>
                        <b>${rate?.baseFare}</b>
                      </div>
                      <div>
                        <span>Tax</span>
                        <b>${rate?.taxAmount}</b>
                      </div>
                      <div>
                        <span>Markup</span>
                        <b>${rate?.markup?.amount}</b>
                      </div>
                      <div className="total">
                        <span>Total</span>
                        <b>${rate?.totalPayable}</b>
                      </div>
                    </div>
                  </section>

                  {/* Audit */}
                  <section className="enterprise-card">
                    <h6 className="section-title">Audit</h6>
                    <div className="info-grid">
                      <div>
                        <span>Booking ID</span>
                        <b>{details?.bookingId}</b>
                      </div>
                      <div>
                        <span>Supplier</span>
                        <b>RateHawk</b>
                      </div>
                      <div>
                        <span>Status</span>
                        <b>{details?.status}</b>
                      </div>
                      <div>
                        <span>Source</span>
                        <b>API</b>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {/* ===== Cancellation Details ===== */}
              {isCancelled && cancellation && (
                <section className="enterprise-card full cancel-card">
                  <h6 className="section-title text-danger">
                    Cancellation Details
                  </h6>

                  <div className="info-grid">
                    <div>
                      <span>Status</span>
                      <b className="text-danger">CANCELLED</b>
                    </div>

                    <div>
                      <span>Cancelled By</span>
                      <b>{cancellation?.cancelledBy}</b>
                    </div>

                    <div>
                      <span>Cancelled At</span>
                      <b>
                        {new Date(cancellation?.cancelledAt).toLocaleString()}
                      </b>
                    </div>

                    <div>
                      <span>Supplier Cancellation ID</span>
                      <b>{cancellation?.supplierCancellationId}</b>
                    </div>
                  </div>

                  <hr />

                  <div className="price-grid">
                    <div>
                      <span>Booking Amount</span>
                      <b>${cancellation?.booking_amt}</b>
                    </div>

                    <div>
                      <span>Cancellation Charge</span>
                      <b className="text-danger">
                        ${cancellation?.cancellation_charge}
                      </b>
                    </div>

                    <div>
                      <span>Refundable Amount</span>
                      <b className="text-success">
                        ${cancellation?.refundable_amt}
                      </b>
                    </div>
                  </div>

                  {cancellation?.remark && (
                    <>
                      <hr />
                      <div>
                        <span>Remark</span>
                        <p className="fw-semibold">{cancellation?.remark}</p>
                      </div>
                    </>
                  )}
                </section>
              )}
            </div>

            {/* ===== Sticky Footer ===== */}
            <div className="modal-footer enterprise-footer sticky-bottom">
              <div className="left">
                <span className="text-muted">
                  System Ref: {details?.bookingId || "—"}
                </span>
              </div>
              <div className="right">
                {/* <button className="btn btn-outline-secondary">
                  Cancel Booking
                </button> */}
                {/* <button
                  className="btn btn-outline-danger"
                  disabled={isCancelled}
                  onClick={() => setShowCancelModal(true)}
                >
                  {isCancelled ? "Already Cancelled" : "Cancel Booking"}
                </button> */}

                <button
                  className="btn btn-outline-danger"
                  disabled={isCancelled}
                  onClick={() => setShowCancelModal(true)}
                >
                  {isCancelled ? "Already Cancelled" : "Cancel Booking"}
                </button>

                <button className="btn btn-primary">Support Ticket</button>
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CancelBookingModal
        show={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelBooking}
        loading={cancelLoading}
        bookingId={details?.bookingId}
      />
    </>
  );
};

export default BookingPageTableModal;
