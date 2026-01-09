import React from "react";
import Link from "next/link";
import Image from "next/image";
import './BookingPageDetail.css';

const BookingPageDetail = () => {
    return (
        <div className="bookingpage-detail start fd-row w-100">
            <div className="bookingpage-detail-box start fd-col">
                <label>Booking Id</label>
                <input type="text" placeholder="Booking Id" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>From</label>
                <input type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>To</label>
                <input type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Booking Status</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Booking Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Payment Status</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Payment Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Airline</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Airline</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Journey Type</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Journey Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>From (place)</label>
                <input type="text" placeholder="From (place)" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>To (place)</label>
                <input type="text" placeholder="To (place)" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Airline PNR</label>
                <input type="text" placeholder="Airline PNR" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>GDS PNR</label>
                <input type="text" placeholder="GDS PNR" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Ticket Number</label>
                <input type="text" placeholder="Ticket Number" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>Group</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Group</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>From (Processed On)</label>
                <input type="text" placeholder="From (Processed On)" />
            </div>
            <div className="bookingpage-detail-box start fd-col">
                <label>To (Processed On)</label>
                <input type="text" placeholder="To (Processed On)" />
            </div>
            <div className="bookingpage-detail-search w-100">
                <button className="btn bookingpage-detail-search-btn cent fd-row">
                    <Image
                        src='/images/icons/search.webp'
                        className="img-fluid"
                        width={32}
                        height={32}
                        alt='crm icon' />
                    <p>Search</p>
                </button>
            </div>
        </div>
    )
}

export default BookingPageDetail