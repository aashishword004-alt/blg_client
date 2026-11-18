
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './forgotpassword.css';
import { Showerror } from './message';

export default function Forgotpassword() {

    const [email, Setemail] = useState('');

    const ForgotPassword = (e) => {
        e.preventDefault();

        const data = {
            email: email
        };

        const url = 'http://localhost:5000/api/users/forgot_password';

        axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {

            console.log(response.data);

            let error = response.data[0].error;
            let success = response.data[1].success;
            let message = response.data[2].message;

            if (error !== 'no') {
                Showerror(message);
            }
            else if (success === 'no') {
                Showerror(message);
            }
            else {
                toast.success(message || 'Password reset link sent successfully!');
                Setemail('');
            }

        })
        .catch((error) => {

            console.log(error);

            Showerror(
                error.response?.data?.message ||
                'Something went wrong!'
            );

        });
    };

    return (
        <div className="forgot-container">
            <div className="forgot-card">

                <div className="icon-box">🔒</div>

                <h3>Forgot Password?</h3>

                <p className="text-muted mt-2 mb-4">
                    Enter your registered email address.
                    We will send you a password reset link.
                </p>

                <form onSubmit={ForgotPassword}>

                    <div className="mb-3 text-start">
                        <label className="form-label fw-semibold">
                            Email Address
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={(e) => Setemail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-reset w-100"
                    >
                        Send Reset Link
                    </button>

                </form>

                <div className="mt-4">
                    <Link to="/" className="back-link">
                        ← Back to Login
                    </Link>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
}
