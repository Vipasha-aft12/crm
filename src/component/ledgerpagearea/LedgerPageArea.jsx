import React from "react";
import Link from "next/link";
import Image from "next/image";
import './LedgerPageArea.css';
import LedgerPageTable from "../ledgerpagetable/LedgerPageTable";
import LedgerSearch from "../ledgersearch/LedgerSearch";

const LedgerPageArea = () => {
    return (
        <div className="ledgerpagebox start fd-col w-100">
            <div className="ledgerpagebox-heading start fd-row mb-3">
                <Image
                    src='/images/icons/right.png'
                    className="img-fluid"
                    width={512}
                    height={512}
                    alt='crm icon' />
                <h3>Ledger Passbook</h3>
            </div>
            <LedgerSearch />
            <LedgerPageTable />
        </div>
    )
}

export default LedgerPageArea