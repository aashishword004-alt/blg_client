
import { Link } from 'react-router-dom';
import './forgotpassword.css';

export default function Forgotpassword() {
    return (
        <div className="forgot-container">
            <div className="forgot-card">

                <div className="icon-box">🔒</div>

                <h3>Forgot Password?</h3>

                <p className="text-muted mt-2 mb-4">
                    Enter your registered email address.
                    We will send you a password reset link.
                </p>

                <form>
                    <div className="mb-3 text-start">
                        <label className="form-label fw-semibold">
                            Email Address
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-reset w-100">
                        Send Reset Link
                    </button>
                </form>

                <div className="mt-4">
                    <Link to="/" className="back-link">
                        ← Back to Login
                    </Link>
                </div>

            </div>
        </div>
    );
}
