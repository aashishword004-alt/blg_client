import './register.css'

export default function Register() {
    return (<div className="container">
        <div className="register-card mx-auto">
            <div className="text-center mb-4">
                <h2>Create Account</h2>
                <p>Join our blog community today!</p>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required=""
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required=""
                    />
                </div>
                <button type="submit" className="btn register-btn w-100">
                    Register
                </button>
                <div className="text-center mt-4">
                    <p>
                        Already have an account?
                        <a href="login.html">Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
    )
}