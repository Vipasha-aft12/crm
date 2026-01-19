import React from "react";
import Link from "next/link";
import Image from "next/image";
import './LedgerSearch.css';


const LedgerSearch = () => {
    return (
        <div className="row ledger-search-row start w-100">
            <div className="col-12 ledger-search-colone start pb-3">
                <p><strong>SEARCH</strong></p>
            </div>
            <div className="col-12 ledger-search-coltwo start fd-row">
                <div className="ledger-search-coltwo-box start fd-col">
                    <lable>From</lable>
                    <input type='date' placeholder="" />
                </div>
                <div className="ledger-search-coltwo-box start fd-col">
                    <lable>To</lable>
                    <input type='date' placeholder="" />
                </div>
                <div className="ledger-search-coltwo-box start fd-col">
                    <lable>Payment Medium</lable>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Payment Medium</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="ledger-search-coltwo-box start fd-col">
                    <lable>Transaction Type</lable>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Transaction Type</option>
                        <option value="1">Transaction Type</option>
                        <option value="2">Paid For Order</option>
                        <option value="3">Paid For Amendment</option>
                        <option value="4">Topup</option>
                        <option value="5">Commission</option>
                        <option value="6">Refund</option>
                        <option value="7">Bill Settle</option>
                    </select>
                </div>
                <div className="ledger-search-coltwo-box start fd-col">
                    <lable>Status</lable>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">Success</option>
                        <option value="2">Failure</option>
                        <option value="3">Pending</option>
                        <option value="4">Refund Success</option>
                        <option value="5">Initiate Redirection</option>
                    </select>
                </div>
            </div>
            <div className="col-12 ledger-search-colthree cent pt-3">
                <button className="btn ledger-search-btn">Search</button>
            </div>
        </div>
    )
}

export default LedgerSearch