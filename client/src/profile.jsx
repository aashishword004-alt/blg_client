
import { useEffect, useState } from 'react';
import Footer from './footer';
import Nevbar from './navbar';
import './profile.css';
import { useCookies } from 'react-cookie';
import { TOKEN, USERID } from './comman';
import axios from 'axios';
import { Showerror, Showmessage } from './message';
import { ToastContainer } from 'react-toastify';

export default function Profile() {

    const [user, Setuser] = useState(null);
    const [blogs, Setblogs] = useState([]);

    const [loading, Setloading] = useState(true);
    const [blogsLoading, SetblogsLoading] = useState(true);

    const [cookie] = useCookies([TOKEN, USERID]);

    const token = cookie[TOKEN];
    const userid = cookie[USERID];

    // Fetch User Profile
    useEffect(() => {

        if (!userid) {
            Setloading(false);
            return;
        }

        let url = `http://localhost:5000/api/users/user/${userid}`;

        axios({
            method: 'get',
            url: url,
            responseType: 'json',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {

            console.log("Profile Response:", response.data);

            let error = response.data[0].error;
            let success = response.data[1].success;
            let message = response.data[2].message;

            if (error !== 'no') {
                Showerror(error);
            }
            else if (success === 'no') {
                Showerror(message);
            }
            else {
                Setuser(response.data[3].data);
            }

        })
        .catch((error) => {
            console.log(error);
            Showerror(
                error.response?.data?.message ||
                'Unable to fetch user profile'
            );
        })
        .finally(() => {
            Setloading(false);
        });

    }, [userid, token]);


    // Fetch User Blogs
    useEffect(() => {

        if (!userid) {
            SetblogsLoading(false);
            return;
        }

        let url = `http://localhost:5000/api/users/post/${userid}`;

        axios({
            method: 'get',
            url: url,
            responseType: 'json',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {

            console.log("My Blogs Response:", response.data);

            let error = response.data[0].error;
            let success = response.data[1].success;
            let message = response.data[2].message;
            let data = response.data[3].data;

            if (error !== 'no') {
                Showerror(error);
            }
            else if (success === 'no') {
                Showerror(message);
            }
            else {
                Setblogs(Array.isArray(data) ? data : []);
            }

        })
        .catch((error) => {
            console.log(error);
            Showerror(
                error.response?.data?.message ||
                'Unable to fetch your blogs'
            );
        })
        .finally(() => {
            SetblogsLoading(false);
        });

    }, [userid, token]);


    // Profile Loading
    if (loading) {
        return (
            <>
                <Nevbar />
                <h4 className="text-center mt-5">
                    Loading Profile...
                </h4>
                <Footer />
            </>
        );
    }


    // User Not Found
    if (!user) {
        return (
            <>
                <Nevbar />
                <ToastContainer />

                <div className="container text-center mt-5">
                    <h4>Profile not found</h4>
                </div>

                <Footer />
            </>
        );
    }


    return (
        <>
            <Nevbar />

            <ToastContainer />

            <div className="container mt-4">

                {/* Profile Information */}

                <div className="profile-card">

                    <img
                        src={`http://localhost:5000/uploads/profile/${user.profilePhoto}`}
                        className="profile-image"
                        alt="Profile Photo"
                    />

                    <h3 className="profile-name">
                        {user.name}
                    </h3>

                    <p className="profile-email">
                        <i className="bi bi-envelope" />
                        {' '}{user.email}
                    </p>

                    <button
                        className="btn edit-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfileModal"
                    >
                        <i className="bi bi-pencil-square" />
                        {' '}Edit Profile
                    </button>

                </div>


                {/* Profile Activity Statistics */}

                <div className="row g-3 mt-2 mb-4">

                    <div className="col-6 col-md-3">
                        <div className="stats-card">
                            <h4>
                                {user.statistics?.publishedBlogs || 0}
                            </h4>
                            <p>Published Blogs</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stats-card">
                            <h4>
                                {user.statistics?.comments || 0}
                            </h4>
                            <p>Comments</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stats-card">
                            <h4>
                                {user.statistics?.likesGiven || 0}
                            </h4>
                            <p>Likes Given</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="stats-card">
                            <h4>
                                {user.statistics?.savedBlogs || 0}
                            </h4>
                            <p>Saved Blogs</p>
                        </div>
                    </div>

                </div>


                {/* My Blogs Heading */}

                <div className="d-flex justify-content-between align-items-center mb-3">

                    <h4
                        className="fw-bold"
                        style={{ color: "#1b4332" }}
                    >
                        My Blogs
                    </h4>

                    <a
                        href="/create-blog"
                        className="text-success text-decoration-none fw-bold"
                    >
                        <i className="bi bi-plus-circle" />
                        {' '}Create Blog
                    </a>

                </div>


                {/* User Blogs */}

                {blogsLoading ? (

                    <h5 className="text-center mt-4">
                        Loading your blogs...
                    </h5>

                ) : blogs.length === 0 ? (

                    <div className="text-center mt-4 mb-5">

                        <i className="bi bi-journal-text fs-1 text-secondary" />

                        <h5 className="mt-3">
                            No Blogs Found
                        </h5>

                        <p className="text-muted">
                            You haven't created any blogs yet.
                        </p>

                    </div>

                ) : (

                    <div className="row g-3">

                        {blogs.map((blog) => (

                            <div
                                className="col-12 col-md-6"
                                key={blog._id}
                            >

                                <div className="card blog-card h-100">

                                    {blog.coverImage && (
                                        <img
                                            src={`http://localhost:5000/uploads/${blog.coverImage}`}
                                            className="card-img-top"
                                            alt={blog.title}
                                            style={{
                                                height: "220px",
                                                objectFit: "cover"
                                            }}
                                        />
                                    )}

                                    <div className="card-body">

                                        <small className="text-success fw-bold">
                                            {blog.categoryId?.name || "Uncategorized"}
                                        </small>

                                        <h5 className="mt-2">
                                            {blog.title}
                                        </h5>

                                        <p>
                                            {blog.excerpt}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">

                                            <small className="text-muted">
                                                <i className="bi bi-calendar3" />
                                                {' '}
                                                {blog.createdAt
                                                    ? new Date(blog.createdAt).toLocaleDateString()
                                                    : ''
                                                }
                                            </small>

                                            <span
                                                className={`badge ${
                                                    blog.status === 'published'
                                                        ? 'bg-success'
                                                        : 'bg-secondary'
                                                }`}
                                            >
                                                {blog.status}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}


                {/* Edit Profile Modal */}

                <div
                    className="modal fade"
                    id="editProfileModal"
                    tabIndex="-1"
                >

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title fw-bold">
                                    Edit Profile
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                />

                            </div>

                            <div className="modal-body">

                                <form>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={user.name}
                                        />

                                    </div>


                                    <div className="mb-3">

                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            defaultValue={user.email}
                                        />

                                    </div>


                                    <div className="mb-3">

                                        <label className="form-label">
                                            Profile Photo
                                        </label>

                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                        />

                                    </div>


                                    <button
                                        type="submit"
                                        className="btn edit-btn w-100"
                                    >
                                        Save Changes
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );

}
