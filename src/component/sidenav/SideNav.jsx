import React from "react";
import Link from "next/link";
import Image from "next/image";
import './SideNav.css';

const SideNav = () => {
    return (
        <section className="sidenav">
            <div className="container sidenav-container">
                <div className="row sidenav-row py-5">
                    <div className="col-12 sidenav-col cent fd-col">
                        <div className="sidenav-logo">
                            <Image
                                src='/images/login/affluence-logo.webp'
                                className="img-fluid"
                                width={408}
                                height={138}
                                alt='site logo' />
                        </div>
                        <div className="sidenav-links w-100 start fd-col">
                            <Link href='/dashboard' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/home-button.png'
                                className="img-fluid dashboard-icon"
                                width={512}
                                height={512}
                                alt='crm icon' />
                            <p>Dashboard</p></Link>
                            <Link href='/bookingpage' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/manage-cart.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Booking Page</p></Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/manage-markup.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Manage Markup</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/booking-details.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Booking Detail</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/change-request.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Change Request</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/ledger-passbook.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Ledger Passbook</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/deposit-request.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Deposit Request</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/add-amount.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Add Amount</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/billing-details.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Billing Detail</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/download.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Download Request</p>
                            </Link>
                            <Link href='/' className="sidenav-linkbox start fd-row">
                            <Image
                                src='/images/icons/request-user.webp'
                                className="img-fluid"
                                width={32}
                                height={32}
                                alt='crm icon' />
                            <p>Register User</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideNav