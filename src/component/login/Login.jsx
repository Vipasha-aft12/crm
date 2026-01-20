// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import './login.css';

// const Login = () => {
//     return (
//         <div className="row login-row w-100 cent .mar-auto">
//             <div className="col-xxl-4 col-md-6 col-sm-8 col-12 login-col">
//                 <div className="login-box cent fd-col w-100">
//                     <Image
//                         src='/images/login/affluence-logo.webp'
//                         className="img-fluid"
//                         width={408 }
//                         height={138}
//                         alt='login logo' />
//                     <p><strong>Welcome back</strong></p>
//                     <p>Sign in to your account to continue</p>
//                     <div className="login-boxcontent w-100 start fd-col my-2">
//                         <form className="login-form start fd-col w-100">
//                             <div className="login-form-box start fd-col w-100">
//                                 <label>User Name</label>
//                                 <input type="email" placeholder="Enter your email" />
//                             </div>
//                             <div className="login-form-box start fd-col w-100">
//                                 <label>Password</label>
//                                 <input type="password" placeholder="Enter your password" />
//                             </div>
//                             <Link href='/dashboard'>Forgot password?</Link>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                                 <label className="form-check-label login-check" for="flexCheckDefault">
//                                     Remember me next time
//                                 </label>
//                             </div>
//                             <button className="btn login-signin-btn w-100 cent mt-lg-3 mt-2">SIGN IN</button>
//                         </form>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login


"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth.api";
import "./login.css";

const Login = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(form);
        document.cookie = `accessToken=${res.accessToken}; path=/;`;
      // store tokens
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("accessToken", res.accessToken);

      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row login-row w-100 cent">
      <div className="col-xxl-4 col-md-6 col-sm-8 col-12 login-col">
        <div className="login-box cent fd-col w-100">
          <Image
            src="/images/login/affluence-logo.webp"
            width={408}
            height={138}
            alt="login logo"
            className="img-fluid"
          />

          <p>
            <strong>Welcome back</strong>
          </p>
          <p>Sign in to your account to continue</p>

          {error && <p className="text-danger">{error}</p>}

          <form
            className="login-form start fd-col w-100"
            onSubmit={handleSubmit}
          >
            <div className="login-form-box start fd-col w-100">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login-form-box start fd-col w-100">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <Link href="/forgot-password">Forgot password?</Link>

            <button
              type="submit"
              className="btn login-signin-btn w-100 cent mt-3"
              disabled={loading}
            >
              {loading ? "Signing in..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
