import React from "react";
import Link from "next/link";
import Image from "next/image";
import './BookingPageTable.css';
import BookingpMainTable from "../bookingpmaintable/BookinpMainTable";


const BookingPageTable = () => {
    return (
        <div className="bookingpage-table start fd-col w-100">
            <div className="bookingpage-table-top btwn fd-row w-100 py-3 px-4">
                <p>(0-1) OUT OF 1 RESULTS SHOWN!</p>
                <div className="bookingpage-table-top-buttons cent fd-row">
                    <button className="btn bookingpage-table-top-btn cent fd-row">
                        <Image
                            src='/images/icons/resize.png'
                            className="img-fluid"
                            width={512}
                            height={512}
                            alt='crm icon' />
                    </button>
                    <button className="btn bookingpage-table-top-btn cent fd-row">
                        <p>Download</p>
                        <Image
                            src='/images/icons/download.png'
                            className="img-fluid"
                            width={512}
                            height={512}
                            alt='crm icon' />
                    </button>
                    <button className="btn bookingpage-table-top-btn cent fd-row">
                        <p>Reset</p>
                        <Image
                            src='/images/icons/refresh-arrow.png'
                            className="img-fluid"
                            width={512}
                            height={512}
                            alt='crm icon' />
                    </button>
                    <button className="btn bookingpage-table-top-btn bookingpage-table-top-btn-blue cent fd-row">
                        <p>Customize</p>
                        <Image
                            src='/images/icons/download.webp'
                            className="img-fluid"
                            width={512}
                            height={512}
                            alt='crm icon' />
                    </button>
                </div>
            </div>
            <div className="bookingpage-table-mid btwn fd-row w-100 px-4">
                <div className="bookingpage-table-mid-left cent fd-row">
                    <p>Show</p>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>
                        <option value="3">40</option>
                    </select>
                    <p>entries</p>
                </div>
                <div className="bookingpage-table-mid-right cent fd-row">
                    <label>Search: </label>
                    <input type="text" placeholder="" />
                </div>
            </div>
            <BookingpMainTable />
            <div className="bookingpage-table-last btwn fd-row w-100 px-4">
                <p>Showing 1 to 4 of 4 entries </p>
                <nav aria-label="Page navigation example" className="pagination">
                    <ul className="pagination cent fd-row gap-1">
                        <li className="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li className="page-item page-link-number"><a class="page-link page-link-number" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> 
            </div>
        </div>
    )
}

export default BookingPageTable