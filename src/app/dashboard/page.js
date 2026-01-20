'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideNav from "../../component/sidenav/SideNav";
import Header from "../../component/header/Header";
import DashboardArea from "../../component/dashboardarea/DashboardArea";
import Footer from "../../component/footer/Footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
      const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    }
  }, []);
    return (
        <section className="dashboard">
            <div className="container-fluid dashboard-container-f">
                <div className="row dashboard-row">
                    <div className="col-3 dashboard-colone">
                        <SideNav />
                    </div>
                    <div className="col-9 dashboard-coltwo">
                        <Header />
                        <DashboardArea />
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard