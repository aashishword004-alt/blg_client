import Nevbar from "./navbar";
import "./user.css";
export default function User() {
    return (<div className="container-fluid">
        {/* Navbar */}
        <Nevbar/>
        {/* Users Section */}
        <div className="container-fluid mt-4">
            <div className="mb-4">
                <h3 className="page-title">Discover Users</h3>
                <p className="text-muted">
                    Explore our blog community and their profiles.
                </p>
            </div>
            {/* Search Box */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control search-box"
                    placeholder="Search users by name or email..."
                />
            </div>
            {/* Users List */}
            <div className="row g-4">
                {/* User 1 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Rahul Patel</h5>
                        <p className="user-email">rahul@gmail.com</p>
                        <a href="user-profile.html?id=1" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
                {/* User 2 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=47"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Priya Sharma</h5>
                        <p className="user-email">priya@gmail.com</p>
                        <a href="user-profile.html?id=2" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
                {/* User 3 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=11"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Amit Shah</h5>
                        <p className="user-email">amit@gmail.com</p>
                        <a href="user-profile.html?id=3" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
                {/* User 4 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=44"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Neha Patel</h5>
                        <p className="user-email">neha@gmail.com</p>
                        <a href="user-profile.html?id=4" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
                {/* User 5 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=13"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Karan Mehta</h5>
                        <p className="user-email">karan@gmail.com</p>
                        <a href="user-profile.html?id=5" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
                {/* User 6 */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="user-card">
                        <img
                            src="https://i.pravatar.cc/150?img=32"
                            className="user-image"
                            alt="User"
                        />
                        <h5 className="user-name">Sneha Joshi</h5>
                        <p className="user-email">sneha@gmail.com</p>
                        <a href="user-profile.html?id=6" className="btn view-btn">
                            <i className="bi bi-person" /> View Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Bottom Navigation */}
        <footer className="bottom-nav">
            <a href="home.html" className="nav-item">
                <i className="bi bi-house-door" />
                <span>Home</span>
            </a>
            <a href="create-blog.html" className="nav-item">
                <i className="bi bi-plus-square" />
                <span>Create Blog</span>
            </a>
            <a href="users.html" className="nav-item active">
                <i className="bi bi-people-fill" />
                <span>Users</span>
            </a>
            <a href="profile.html" className="nav-item">
                <i className="bi bi-person-circle" />
                <span>Profile</span>
            </a>
        </footer>
    </div>
    )
}