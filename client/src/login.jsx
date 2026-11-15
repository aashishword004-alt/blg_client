import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Login() {
   const [email,Setemail] = useState('');
   const [pass,Setpass] = useState('');
    let userLogin = function()
    {
    let url = 'http://localhost:5000/api/users/login';
    let Form = new FormData();
    Form.append('emial',email);
    Form.append('password',pass);
    axios({
        method:'POST',
        responseType:'json',
        url:url,
        data:Form
    }).then((response) =>{
      console.log(response.data)
    }).catch((error) =>{

    })
    }

    return (<>
        <div className="container-fluid login-container">
            <div className="row min-vh-100">
                {/* Left Section */}
                <div className="col-lg-6 left-section d-none d-lg-flex">
                    <div className="left-content">
                        <h1>
                            <i className="bi bi-journal-richtext" />
                            BlogSpace
                        </h1>
                        <h2>
                            Share Your Stories
                            <br />
                            With The World.
                        </h2>
                        <p>
                            Discover interesting articles, share your thoughts, and connect with
                            people through the power of writing.
                        </p>
                        <div className="left-footer">
                            <i className="bi bi-pencil-square" />
                            Your ideas deserve to be heard.
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="col-lg-6 right-section">
                    <div className="login-box">
                        <div className="mobile-logo d-lg-none">
                            <h2>
                                <i className="bi bi-journal-richtext" />
                                BlogSpace
                            </h2>
                        </div>
                        <div className="login-heading">
                            <h2>Welcome Back!</h2>
                            <p>Please login to your account</p>
                        </div>
                        {/* Login Form */}
                        <form onSubmit={userLogin} >
                            {/* Email */}
                            <div className="mb-4">
                                <label className="form-label">Email Address</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-envelope" />
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="email"
                                        required=""
                                    />
                                </div>
                            </div>
                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-lock" />
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        required=""
                                    />
                                    <button
                                        className="input-group-text password-toggle"
                                        type="button"
                                        onclick="togglePassword()"
                                    >
                                        <i className="bi bi-eye" id="eyeIcon" />
                                    </button>
                                </div>
                            </div>
                            {/* Remember Me and Forgot Password */}
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="remember"
                                    />
                                    <label className="form-check-label" htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/forgotpassword" className="forgot-link">
                                    Forgot Password?
                                </Link>
                            </div>
                            {/* Login Button */}
                            <button type="submit" className="btn login-btn w-100">
                                Login
                                <i className="bi bi-arrow-right" />
                            </button>
                        </form>
                        {/* Register Link */}
                        <div className="register-text">
                            Don't have an account?
                            <Link to="/register">Create Account</Link>
                        </div>
                        {/* Footer */}
                        <div className="bottom-text">
                            © 2026 BlogSpace. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Password Toggle */}
    </>
    )
}