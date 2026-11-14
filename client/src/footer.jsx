import "./blog.css"

export default function Footer()
{
    return(  <footer className="bottom-nav">
            <a href="home.html" className="nav-item">
                <i className="bi bi-house-door" />
                <span>Home</span>
            </a>
            <a href="create-blog.html" className="nav-item active">
                <i className="bi bi-plus-square-fill" />
                <span>Create Blog</span>
            </a>
            <a href="users.html" className="nav-item">
                <i className="bi bi-people" />
                <span>Users</span>
            </a>
            <a href="profile.html" className="nav-item">
                <i className="bi bi-person-circle" />
                <span>Profile</span>
            </a>
        </footer>)
}