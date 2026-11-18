
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './register.css';
import { Showerror } from './message';
import { useState } from 'react';

export default function Register() {

    const navigate = useNavigate();
    const [name, Setname] = useState('')
    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    // Register Function

    const RegisterUser = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password
        };

        const url = 'http://localhost:5000/api/users/register';

        axios.post(url, data, {
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
                    toast.success(message || 'Registration successful!');

                    Setname('');
                    Setemail('');
                    Setpassword('');

                    setTimeout(() => {
                        navigate('/');
                    }, 1500);
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

        <div className="register-container">

            <div className="register-card">

                <div className="register-icon">
                    <i className="bi bi-person-plus" />
                </div>

                <div className="text-center mb-4">

                    <h3>Create Account</h3>

                    <p className="text-muted">
                        Join BlogSpace and share your stories.
                    </p>

                </div>


                <form onSubmit={RegisterUser}>

                    {/* Full Name */}
                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Full Name
                        </label>

                        <div className="input-group">

                            <span className="input-group-text">
                                <i className="bi bi-person" />
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => Setname(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />

                        </div>

                    </div>


                    {/* Email */}
                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Email Address
                        </label>

                        <div className="input-group">

                            <span className="input-group-text">
                                <i className="bi bi-envelope" />
                            </span>

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

                    </div>


                    {/* Password */}
                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Password
                        </label>

                        <div className="input-group">

                            <span className="input-group-text">
                                <i className="bi bi-lock" />
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={(e) => Setpassword(e.target.value)}
                                placeholder="Create a password"
                                required
                            />

                        </div>

                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn register-btn w-100"
                    >

                        Create Account

                        <i className="bi bi-arrow-right ms-2" />

                    </button>

                </form>


                <div className="text-center mt-4">

                    Already have an account?{' '}

                    <Link to="/" className="login-link">
                        Login
                    </Link>

                </div>


                <div className="text-center mt-4 text-muted small">

                    © 2026 BlogSpace. All Rights Reserved.

                </div>

            </div>

            <ToastContainer />

        </div>

    );

}
