// "use client";
// import React, { useState } from "react";

// const CancelBookingModal = ({
//   show,
//   onClose,
//   onConfirm,
//   loading,
//   bookingId,
//   amount,
//   refundable,
//   policyText = "Cancellation charges may apply as per supplier policy.",
// }) => {
//   const [reason, setReason] = useState("");

//   if (!show) return null;

//   return (
//     <div className="enterprise-cancel-overlay" onMouseDown={onClose}>
//       <div
//         className="enterprise-cancel-modal"
//         onClick={(e) => e.stopPropagation()} // 🔥 critical
//       >
//         <div className="cancel-header">
//           <h5>Cancel Booking</h5>
//           <span className="text-muted">Booking ID: {bookingId}</span>
//         </div>

//         <div className="cancel-body">
//           {/* Summary */}
//           <div className="cancel-summary">
//             <div>
//               <span>Paid Amount</span>
//               <b>${amount}</b>
//             </div>
//             <div>
//               <span>Estimated Refund</span>
//               <b className="text-success">${refundable}</b>
//             </div>
//           </div>

//           {/* Policy */}
//           <div className="cancel-policy">⚠ {policyText}</div>

//           {/* Reason */}
//           <div className="cancel-reason">
//             <label>Cancellation Reason</label>
//             <textarea
//               className="form-control"
//               rows="3"
//               placeholder="Enter reason for cancellation"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               autoFocus
//             />
//           </div>
//         </div>

//         <div className="cancel-footer">
//           <button
//             className="btn btn-secondary"
//             onClick={onClose}
//             disabled={loading}
//           >
//             Close
//           </button>
//           <button
//             className="btn btn-danger"
//             disabled={!reason || loading}
//             onClick={() => onConfirm(reason)}
//           >
//             {loading ? "Cancelling..." : "Confirm Cancellation"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CancelBookingModal;

// "use client";
// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";

// const CancelBookingModal = ({
//   show,
//   onClose,
//   onConfirm,
//   loading,
//   bookingId,
//   amount,
//   refundable,
//   policyText = "Cancellation charges may apply as per supplier policy.",
// }) => {
//   const [reason, setReason] = useState("");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!show || !mounted) return null;

//   return createPortal(
//     <div className="enterprise-cancel-overlay" onClick={onClose}>
//       <div
//         className="enterprise-cancel-modal"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="cancel-header">
//           <h5>Cancel Booking</h5>
//           <span className="text-muted">Booking ID: {bookingId}</span>
//         </div>

//         <div className="cancel-body">
//           <div className="cancel-summary">
//             <div>
//               <span>Paid Amount</span>
//               <b>${amount}</b>
//             </div>
//             <div>
//               <span>Estimated Refund</span>
//               <b className="text-success">${refundable}</b>
//             </div>
//           </div>

//           <div className="cancel-policy">⚠ {policyText}</div>

//           <div className="cancel-reason">
//             <label>Cancellation Reason</label>
//             <textarea
//               className="form-control"
//               rows="3"
//               placeholder="Enter reason for cancellation"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               autoFocus
//             />
//           </div>
//         </div>

//         <div className="cancel-footer">
//           <button
//             className="btn btn-secondary"
//             onClick={onClose}
//             disabled={loading}
//           >
//             Close
//           </button>
//           <button
//             className="btn btn-danger"
//             disabled={!reason || loading}
//             onClick={() => onConfirm(reason)}
//           >
//             {loading ? "Cancelling..." : "Confirm Cancellation"}
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body, // 🔥 renders OUTSIDE bootstrap modal
//   );
// };

// export default CancelBookingModal;

// if (!show) return null;

// return (
//   <div className="enterprise-cancel-overlay">
//     {/* backdrop layer */}
//     <div className="cancel-backdrop" onClick={onClose}></div>

//     {/* modal layer */}
//     <div className="enterprise-cancel-modal">
//       <div className="cancel-header">
//         <h5>Cancel Booking</h5>
//         <span className="text-muted">Booking ID: {bookingId}</span>
//       </div>

//       <div className="cancel-body">
//         <div className="cancel-summary">
//           <div>
//             <span>Paid Amount</span>
//             <b>${amount}</b>
//           </div>
//           <div>
//             <span>Estimated Refund</span>
//             <b className="text-success">${refundable}</b>
//           </div>
//         </div>

//         <div className="cancel-policy">⚠ {policyText}</div>

//         <div className="cancel-reason">
//           <label>Cancellation Reason</label>
//           <textarea
//             className="form-control"
//             rows="3"
//             placeholder="Enter reason for cancellation"
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             autoFocus
//           />
//         </div>
//       </div>

//       <div className="cancel-footer">
//         <button
//           className="btn btn-secondary"
//           onClick={onClose}
//           disabled={loading}
//         >
//           Close
//         </button>

//         <button
//           className="btn btn-danger"
//           disabled={!reason || loading}
//           onClick={() => onConfirm(reason)}
//         >
//           {loading ? "Cancelling..." : "Confirm Cancellation"}
//         </button>
//       </div>
//     </div>
//   </div>
// );

"use client";
import React, { useState } from "react";

const CancelBookingModal = ({
  show,
  onClose,
  onConfirm,
  loading,
  bookingId,
}) => {
  const [reason, setReason] = useState("");

  if (!show) return null;

  return (
    // <div className="enterprise-cancel-overlay">
    //   <div className="enterprise-cancel-modal">
    <div className="enterprise-cancel-overlay" onClick={onClose}>
      <div
        className="enterprise-cancel-modal"
        onClick={(e) => e.stopPropagation()} // ✅ THIS LINE IS CRITICAL
      >
        {/* Header */}
        <div className="cancel-header">
          <h5>Cancel Booking</h5>
          <p className="text-muted small">Booking ID: {bookingId}</p>
        </div>

        {/* Body */}
        <div className="cancel-body">
          <label className="fw-semibold">Reason for cancellation</label>
          {/* <textarea
            className="form-control"
            rows="3"
            placeholder="Enter cancellation reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          /> */}
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter cancellation reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <div className="cancel-policy">
            Supplier cancellation charges may apply. Refunds processed in 5–7
            working days.
          </div>
        </div>

        {/* Footer */}
        <div className="cancel-footer">
          <button
            className="btn btn-secondary"
            onClick={onClose}
            disabled={loading}
          >
            Close
          </button>

          <button
            className="btn btn-danger"
            disabled={loading || !reason.trim()}
            onClick={() => onConfirm(reason)}
          >
            {loading ? "Cancelling..." : "Confirm Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;
