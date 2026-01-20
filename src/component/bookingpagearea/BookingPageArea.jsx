import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./BookingPageArea.css";
import BookingPageDetail from "../bookingpagedetail/BookingPageDetail";
import BookingPageTable from "../bookingpagetable/BookingPageTable";
import { getBookings } from "../../lib/booking.api";

const BookingPageArea = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeType, setActiveType] = useState("hotel"); 


useEffect(() => {
  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");

      let response;

      if (activeType === "flight") {
        response = await getFlightBookings();
      } else if (activeType === "hotel") {
        response = await getBookings();
      } else if (activeType === "package") {
        response = await getPackageBookings();
      } else if (activeType === "car") {
        response = await getCarBookings();
      }
      setBookings(response.data);
    } catch (err) {
      setError(err.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  loadBookings();
}, [activeType]);

  return (
    <div className="bookingpagebox start fd-col w-100">
      <div className="bookingpagebox-heading start fd-row mb-3">
        <Image
          src="/images/icons/right.png"
          className="img-fluid"
          width={512}
          height={512}
          alt="crm icon"
        />
        <h3>Booking List</h3>
      </div>
      <div className="bookingpagebox-tab start fd-col w-100">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeType === "flight" ? "active" : ""
              } start fd-row`}
              type="button"
              onClick={() => setActiveType("flight")}
            >
              <Image
                src="/images/icons/flight.webp"
                className="img-fluid bp-black-img"
                width={32}
                height={32}
                alt="crm icon"
              />
              <p>Flight</p>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeType === "package" ? "active" : ""
              } start fd-row`}
              type="button"
              onClick={() => setActiveType("package")}
            >
              <Image
                src="/images/icons/package.webp"
                className="img-fluid bp-black-img"
                width={32}
                height={32}
                alt="crm icon"
              />
              <p>Package</p>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeType === "hotel" ? "active" : ""
              } start fd-row`}
              type="button"
              onClick={() => setActiveType("hotel")}
            >
              <Image
                src="/images/icons/hoteltwo.webp"
                className="img-fluid bp-black-img"
                width={32}
                height={32}
                alt="crm icon"
              />
              <p>Hotel</p>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeType === "car" ? "active" : ""
              } start fd-row`}
              type="button"
              onClick={() => setActiveType("car")}
            >
              <Image
                src="/images/icons/car.webp"
                className="img-fluid bp-black-img"
                width={32}
                height={32}
                alt="crm icon"
              />
              <p>Car Rental</p>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active start fd-col"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <h4>MANAGE CART - FLIGHT</h4>
            <BookingPageDetail />
          </div>
          <div
            className="tab-pane fade start fd-col"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <h4>MANAGE CART - PACKAGE</h4>
            <BookingPageDetail />
          </div>
          <div
            className="tab-pane fade start fd-col start fd-col"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <h4>MANAGE CART - HOTEL</h4>
            <BookingPageDetail />
          </div>
          <div
            className="tab-pane fade start fd-col"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <h4>MANAGE CART - CAR RENTAL</h4>
            <BookingPageDetail />
          </div>
        </div>
      </div>
      <BookingPageTable
        bookings={bookings}
        loading={loading}
        error={error}
        type={activeType}
      />
    </div>
  );
};

export default BookingPageArea;

