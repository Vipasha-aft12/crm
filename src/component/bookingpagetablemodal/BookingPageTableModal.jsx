"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './BookingPageTableModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BookingPageTableModal = () => {

    return (
        <div className="bookkp-modal start fd-col">

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                TO100257847212
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body start fd-col">
                            <div className="accordion start fd-col gap-3 w-100" id="accordionExample">
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header w-100" id="headingOne">
                                        <button className="accordion-button w-100 btwn fd-row" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <p> Cart Information: TJ100257847212</p>

                                            <div className="tab-box-collection cent fd-row">
                                                <div className="tab-box cent fd-row">
                                                    <p>Print Ticket</p>
                                                    <Image
                                                        src='/images/icons/printer.png'
                                                        className="img-fluid"
                                                        width={512}
                                                        height={512}
                                                        alt='site icon' />
                                                </div>
                                                <div className="tab-box cent fd-row">
                                                    <p>Invoice</p>
                                                    <Image
                                                        src='/images/icons/printer.png'
                                                        className="img-fluid"
                                                        width={512}
                                                        height={512}
                                                        alt='site icon' />
                                                </div>
                                                <div className="tab-box cent fd-row">
                                                    <p>Add Meal Seat Bag</p>
                                                    <Image
                                                        src='/images/icons/edit.png'
                                                        className="img-fluid"
                                                        width={512}
                                                        height={512}
                                                        alt='site icon' />
                                                </div>
                                                <div className="tab-box cent fd-row">
                                                    <p>More Option</p>
                                                    <Image
                                                        src='/images/icons/view.png'
                                                        className="img-fluid"
                                                        width={512}
                                                        height={512}
                                                        alt='site icon' />
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="cart-info start fd-row w-100">
                                                <div className="cart-info-box start fd-col">
                                                    <p>Booking ld :</p>
                                                    <p><strong>T100257847212</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Amount : </p>
                                                    <p><strong>₹ 73,287.00</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Status :</p>
                                                    <p className="green-text"><strong>Success</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Order Type :</p>
                                                    <p><strong>Air</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Channel Type : </p>
                                                    <p><strong>Api</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>CreatedOn :</p>
                                                    <p><strong>Mar 2, 2023 12:34 AM</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Flow Type :</p>
                                                    <p><strong>Online</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Agent Email :</p>
                                                    <p><strong>cs@affluencetravels.com</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Agent Contact :</p>
                                                    <p><strong>8929267385</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Loggedin User :</p>
                                                    <p><strong>Affluence Travels Private Limited (api) (31006672)</strong></p>
                                                </div>
                                                <div className="cart-info-box start fd-col">
                                                    <p>Booking User :</p>
                                                    <p><strong>Affluence Travels Private Limited (api) (310066720)</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header w-100" id="headingTwo">
                                        <button className="accordion-button btwn fd-row w-100 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <p>Notes <span>0</span></p>
                                            <div className="tab-box cent fd-row">
                                                <p>+ Add Notes</p>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item w-100">
                                    <h2 className="accordion-header w-100" id="headingThree">
                                        <button className="accordion-button collapsed w-100 btwn fd-row" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <p>Card Amedment <span>0</span></p>
                                            <div className="tab-box cent fd-row">
                                                <p>+ Raise Amendment</p>
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item w-100 last-booking-item">
                                    <h2 className="accordion-header" id="headingfour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            <p>Booking Details</p>
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row b-detail-row start w-100">
                                                <div className="col-12 b-detail-colone btwn fd-row">
                                                    <div className="b-detail-airline cent fd-row">
                                                        <Image
                                                            src='/images/icons/vistara-uk.png'
                                                            className="img-fluid"
                                                            width={160}
                                                            height={160}
                                                            alt='site icon' />
                                                        <div className="b-detail-airline-name start fd-col">
                                                            <p><strong>Vistara</strong></p>
                                                            <p>UK-853</p>
                                                        </div>
                                                    </div>
                                                    <div className="b-detail-airline-d btwn fd-row">
                                                        <div className="b-detail-airline-d-one">
                                                            <p className="mb-2"><strong>Mumbai India (Chhatrapati Shivaji Maharaj International Air port)- BOM</strong></p>
                                                            <p>16:00. Thu 9-Mar</p>
                                                        </div>
                                                        <div className="b-detail-airline-d-two cent fd-row">
                                                            <Image
                                                                src='/images/icons/dry-clean.png'
                                                                className="img-fluid circle-image"
                                                                width={512}
                                                                height={512}
                                                                alt='site icon' />
                                                            <div className="b-detail-airline-d-one-stops cent">
                                                                <div className="b-detail-airline-d-one-stops-line"></div>
                                                                <p>Non-Stop</p>
                                                                <div className="b-detail-airline-d-one-stops-line"></div>
                                                            </div>
                                                            <Image
                                                                src='/images/icons/right-arrow.png'
                                                                className="img-fluid right-arrow"
                                                                width={32}
                                                                height={32}
                                                                alt='site icon' />
                                                        </div>
                                                        <div className="b-detail-airline-d-one b-detail-airline-d-three">
                                                            <p className="mb-2"><strong>Bengaluru india (Bengaluru Intl Arpt)-BLR</strong></p>
                                                            <p>17:45. Thu 9-Mar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 b-detail-colone-coltwo">
                                                    <div className="b-detail-colone-coltwobox start fd-col">
                                                        <p>Last Name/First Name Title</p>
                                                        <p><strong>1. THOMAS/CALVIN Mr. (A)</strong></p>
                                                        <p><span>DOB : 05/09/1996</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-8 b-detail-colone-colthree start fd-row">
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Base Fare</p>
                                                        <p><strong>₹ 2.640.00</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Taxes</p>
                                                        <p><strong>₹ 647.00</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Airine PNR</p>
                                                        <p><strong>6XZ57C</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">GDS PNR</p>
                                                        <p><strong>3WO3C5</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Ticket Number</p>
                                                        <p><strong>22892B9843547</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Commision</p>
                                                        <p><strong>₹ 356.16</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Net Fare</p>
                                                        <p><strong>₹ 2.948.65</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Gross Fare</p>
                                                        <p><strong>3287</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">Document ID</p>
                                                        <p><strong>1234567</strong></p>
                                                    </div>
                                                    <div className="b-detail-colone-colthreebox">
                                                        <p className="mb-2">EMD Number</p>
                                                        <p><strong>123456</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPageTableModal