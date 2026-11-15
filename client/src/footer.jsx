import "./blog.css"
import { Link } from "react-router-dom";

export default function Footer()
{
    return(  <footer className="bottom-nav">
            <Link to="/home" className="nav-item">
                <i className="bi bi-house-door" />
                <span>Home</span>
            </Link>
            <Link to="/" className="nav-item active">
                <i className="bi bi-plus-square-fill" />
                <span>Create Blog</span>
            </Link>
            <Link to="/user" className="nav-item">
                <i className="bi bi-people" />
                <span>Users</span>
            </Link>
            <Link  to="/profile" className="nav-item">
                <i className="bi bi-person-circle" />
                <span>Profile</span>
            </Link>
        </footer>)
}