"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './BookingpMainTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BookingPageTableModal from "../bookingpagetablemodal/BookingPageTableModal";


const BookingpMainTable = () => {



    return (
        <div className="container w-100">
            <div className="row w-100">
                <div className="col-12 w-100">
                    <div className="table-wrapper px-2">
                        <table>
                            <thead> 
                                <tr>
                                    <th><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> Select All</th>
                                    <th>Generation Time</th>
                                    <th>Booking Status</th>
                                    <th>Payment Status</th>
                                    <th>Booking Id</th>
                                    <th>PNR</th>
                                    <th>Total Amount</th>
                                    <th>Net Fare</th>
                                    <th>Passenger Name</th>
                                    <th>Raise Amendment</th>
                                    <th>Print Ticket</th>
                                    <th>Summary</th>
                                    <th>Travel Date</th>
                                    <th>Time to Travel (in days)</th>
                                    <th>Logged In User Id</th>
                                    <th>Booking User Id</th>
                                    <th>Flow Type</th>
                                    <th>Reason Processed On</th>
                                    <th>Gross Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                    <td>Mar 2, 2025 12:34 AM</td>
                                    <td>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Successful</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Cancel</option>
                                        </select>
                                    </td>
                                    <td>Success</td>
                                    <td><BookingPageTableModal /></td>
                                    <td>6XZ57C</td>
                                    <td>$3200.00</td>
                                    <td>$2600.00</td>
                                    <td>MR JAMES THOMAS</td>
                                    <td>Raise Amendment</td>
                                    <td>View</td>
                                    <td>UK-373 DEL-LDR 20 Mar</td>
                                    <td>Mar 9, 2025 12:34 AM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                    <td>Mar 2, 2025 12:34 AM</td>
                                    <td>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Successful</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Cancel</option>
                                        </select>
                                    </td>
                                    <td>Success</td>
                                    <td><BookingPageTableModal /></td>
                                    <td>6XZ57C</td>
                                    <td>$3200.00</td>
                                    <td>$2600.00</td>
                                    <td>MR JAMES THOMAS</td>
                                    <td>Raise Amendment</td>
                                    <td>View</td>
                                    <td>UK-373 DEL-LDR 20 Mar</td>
                                    <td>Mar 9, 2025 12:34 AM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                    <td>Mar 2, 2025 12:34 AM</td>
                                    <td>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Successful</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Cancel</option>
                                        </select>
                                    </td>
                                    <td>Success</td>
                                    <td><BookingPageTableModal /></td>
                                    <td>6XZ57C</td>
                                    <td>$3200.00</td>
                                    <td>$2600.00</td>
                                    <td>MR JAMES THOMAS</td>
                                    <td>Raise Amendment</td>
                                    <td>View</td>
                                    <td>UK-373 DEL-LDR 20 Mar</td>
                                    <td>Mar 9, 2025 12:34 AM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                    <td>Mar 2, 2025 12:34 AM</td>
                                    <td>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Successful</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Cancel</option>
                                        </select>
                                    </td>
                                    <td>Success</td>
                                    <td><BookingPageTableModal /></td>
                                    <td>6XZ57C</td>
                                    <td>$3200.00</td>
                                    <td>$2600.00</td>
                                    <td>MR JAMES THOMAS</td>
                                    <td>Raise Amendment</td>
                                    <td>View</td>
                                    <td>UK-373 DEL-LDR 20 Mar</td>
                                    <td>Mar 9, 2025 12:34 AM</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookingpMainTable