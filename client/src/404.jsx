import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-success">404</h1>

                <h2 className="fw-bold mb-3">Page Not Found</h2>

                <p className="text-muted mb-4">
                    Sorry! The page you are looking for doesn't exist
                    or has been moved.
                </p>

                <Link to="/home" className="btn btn-success px-4">
                    Go to Home
                </Link>
            </div>
        </div>
    );
}