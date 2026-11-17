
import { useEffect, useState } from 'react';
import './view_blog.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { TOKEN } from './comman';
import { Showerror, Showmessage } from './message';
import { ToastContainer } from 'react-toastify';

export default function View_blog() {

    const { id } = useParams();

    const [item, Setitems] = useState([]);

    const [cookie] = useCookies([TOKEN]);

    const token = cookie[TOKEN];

    useEffect(() => {

        if (!token || !id) {
            return;
        }

        let url = `http://localhost:5000/api/post/${id}`;

        axios({
            method: 'get',
            responseType: 'json',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {

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

                Setitems([response.data[3].data]);

                console.log(response.data[3].data);

                Showmessage(message);
            }

        })
        .catch((error) => {
            console.log(error);
            Showerror("Something went wrong");
        });

    }, [id, token]);

    return (
        <>
            {/* Navbar */}

            <ToastContainer />

            <nav className="navbar">
                <div className="container-fluid">

                    <a href="#" className="navbar-brand">
                        <i className="bi bi-journal-richtext" />
                        MyBlog
                    </a>

                    <Link to="/home" className="back-btn">
                        <i className="bi bi-arrow-left" />
                        Back to Blogs
                    </Link>

                </div>
            </nav>

            {/* Blog Details */}

            {item.map((items) => (

                <div className="container blog-container" key={items._id}>

                    <div className="blog-card">

                        {/* Category */}

                        <span className="blog-category">
                            {items.categoryId?.name}
                        </span>

                        {/* Blog Title */}

                        <h1 className="blog-title">
                            {items.title}
                        </h1>

                        {/* Author Details */}

                        <div className="author-section">

                            <div className="author-icon">
                                <i className="bi bi-person-fill" />
                            </div>

                            <div>

                                <div className="author-name">
                                    {items.authorId?.name}
                                </div>

                                <div className="publish-date">
                                    <i className="bi bi-calendar3" />

                                    {items.publishedAt
                                        ? new Date(items.publishedAt).toLocaleDateString()
                                        : ''}
                                </div>

                            </div>

                        </div>

                        {/* Cover Image */}

                        <img
                            src={`http://localhost:5000/uploads/${items.coverImage}`}
                            className="blog-cover"
                            alt={items.title}
                        />

                        {/* Blog Content */}

                        <div className="blog-content">
                            <p>{items.content}</p>
                        </div>

                        {/* Back Button */}

                        <div className="mt-4">
                            <Link to="/home" className="btn btn-success">
                                <i className="bi bi-arrow-left" />
                                Back to Blogs
                            </Link>
                        </div>

                    </div>

                    {/* Footer */}

                    <div className="page-footer">
                        © 2026 MyBlog. All Rights Reserved.
                    </div>

                </div>

            ))}

        </>
    );
}
