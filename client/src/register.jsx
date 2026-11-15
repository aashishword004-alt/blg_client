import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-icon">
                <i className="bi bi-person-plus" />
            </div>
            <div className="text-center mb-4">
                <h3>Create Account</h3>
                <p className="text-muted">Join BlogSpace and share your stories.</p>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-person" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter your name"
                            required=""
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-envelope" />
                        </span>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email"
                            required=""
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label fw-semibold">Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-lock" />
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Create a password"
                            required=""
                        />
                    </div>
                </div>
                <button type="submit" className="btn register-btn w-100">
                    Create Account
                    <i className="bi bi-arrow-right" />
                </button>
            </form>
            <div className="text-center mt-4">
                Already have an account?
                <Link to="/" className="login-link">
                    Login
                </Link>
            </div>
            <div className="text-center mt-4 text-muted small">
                © 2026 BlogSpace. All Rights Reserved.
            </div>
        </div>
    </div>
    )
}