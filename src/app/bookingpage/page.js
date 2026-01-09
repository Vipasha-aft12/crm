'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './bookingpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideNav from "../../component/sidenav/SideNav";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import BookingPageArea from "../../component/bookingpagearea/BookingPageArea";

const BookingPage = () => {
    return (
        <section className="bookingpage">
            <div className="container-fluid bookingpage-container-f">
                <div className="row bookingpage-row start align-items-stretch">
                    <div className="col-2 bookingpage-colone pe-0">
                        <SideNav />
                    </div>
                    <div className="col-10 bookingpage-coltwo ps-0">
                        <Header />
                        <BookingPageArea />
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingPage