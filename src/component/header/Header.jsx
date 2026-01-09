import React from "react";
import Link from "next/link";
import Image from "next/image";
import './Header.css';

const Header = () => {
    return (
        <header className="header sticky-top w-100">
            <div className="header-outerbox start fd-col">
                <div className="header-box start fd-row">
                <div className="header-box-logo cent">
                    <Image
                    src='/images/icons/favicon.ico'
                    className="img-fluid"
                    width={162}
                    height={152}
                    alt='crm icon' />
                </div>
                <p><strong>Affluence Travels</strong></p>
                <Image
                    src='/images/icons/down-arrow.png'
                    className="img-fluid"
                    width={512}
                    height={512}
                    alt='crm icon' />
            </div>
            <div className="header-sub_box cent fd-col">
                <div className="header-sub_box-top cent fd-col">
                    <p><strong>Hello,</strong></p>
                    <p>Affluence Travels Private Limited</p>
                    <p>(Api)(10000100)</p>
                </div>
                <div className="header-sub_box-bottom cent fd-row">
                    <Image
                    src='/images/icons/exit.png'
                    className="img-fluid"
                    width={512}
                    height={512}
                    alt='crm icon' />
                    <Link href='/login'>Log out</Link>
                </div>
            </div>
            </div>
            
        </header>
    )
}

export default Header