"use client"
import Image from "next/image";
import Login from '@/component/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function HomePage() {
  return (
    <section className="login-page cent"> 
      <div className="container login-page-container cent">
            <Login />
      </div>
    </section>
  );
}
