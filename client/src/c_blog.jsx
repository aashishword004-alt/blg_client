
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './c_blog.css';
import { TOKEN, USERID } from './comman';
import { Showerror } from './message';
import { useCookies } from 'react-cookie';

export default function Create_blog() {

    const [cat, Setcat] = useState([]);
    const [cookie] = useCookies([TOKEN,USERID])
    const userid = cookie[USERID]
    // Generate Slug from Title
    const GenerateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };


    // Fetch Category
    useEffect(() => {

        let url = 'http://localhost:5000/api/category/';

        axios({
            method: 'get',
            responseType: 'json',
            url: url
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
                    Setcat(response.data[3].data);
                }

            })
            .catch((error) => {
                console.log(error);
                Showerror("Unable to fetch categories");
            });

    }, []);


    // Create Blog
    const Create = async function (e) {

        e.preventDefault();

        let form = e.currentTarget;
        let formdata = new FormData(form);

        let url = `http://localhost:5000/api/post/create/${userid}`;

        axios({
            method: 'post',
            responseType: 'json',
            url: url,
            data: formdata,
            headers: {
                Authorization: `Bearer ${TOKEN}`
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
                    toast.success("Blog created successfully!");
                    form.reset();
                }

            })
            .catch((error) => {
                console.log(error);
                Showerror("Something went wrong!");
            });

    };


    return (

        <>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">

                <div className="container">

                    <Link className="navbar-brand" to="/">
                        My Blog
                    </Link>

                    <Link
                        to="/profile"
                        className="btn btn-outline-light btn-sm"
                    >
                        <i className="bi bi-person"></i> Profile
                    </Link>

                </div>

            </nav>


            {/* Create Blog Form */}
            <div className="container create-container">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="page-title">
                            Create New Blog
                        </h2>

                        <p className="text-muted mb-0">
                            Write and publish your blog post.
                        </p>

                    </div>

                </div>


                <div className="form-card">

                    <form
                        id="createBlogForm"
                        encType="multipart/form-data"
                        onSubmit={Create}
                    >

                        {/* Title */}
                        <div className="mb-3">

                            <label className="form-label">
                                Blog Title <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Enter blog title"
                                required
                                onChange={(e) => {
                                    document.getElementById('slug').value =
                                        GenerateSlug(e.target.value);
                                }}
                            />

                        </div>


                        {/* Slug */}
                        <div className="mb-3">

                            <label className="form-label">
                                Slug
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="slug"
                                name="slug"
                                placeholder="blog-title"
                                required
                                readOnly
                            />

                            <small className="text-muted">
                                Automatically generated from the title.
                            </small>

                        </div>


                        {/* Excerpt */}
                        <div className="mb-3">

                            <label className="form-label">
                                Excerpt <span className="required">*</span>
                            </label>

                            <textarea
                                className="form-control"
                                name="excerpt"
                                rows={3}
                                placeholder="Write a short description..."
                                required
                            />

                        </div>


                        {/* Content */}
                        <div className="mb-3">

                            <label className="form-label">
                                Blog Content <span className="required">*</span>
                            </label>

                            <textarea
                                className="form-control"
                                name="content"
                                rows={10}
                                placeholder="Write your blog content here..."
                                required
                            />

                        </div>


                        {/* Cover Image */}
                        <div className="mb-3">

                            <label className="form-label">
                                Cover Image <span className="required">*</span>
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                id="coverImage"
                                name="coverImage"
                                accept="image/*"
                                required
                            />

                        </div>


                        {/* Category */}
                        <div className="mb-3">

                            <label className="form-label">
                                Category <span className="required">*</span>
                            </label>

                            <select
                                className="form-select"
                                name="categoryname"
                                id="categoryname"
                                required
                            >

                                <option value="">
                                    Select Category
                                </option>

                                {cat.map((ct) => (

                                    <option
                                        key={ct._id}
                                        value={ct.name}
                                    >
                                        {ct.name}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* Status */}
                        <div className="mb-4">

                            <label className="form-label">
                                Blog Status <span className="required">*</span>
                            </label>

                            <select
                                className="form-select"
                                name="status"
                                id="status"
                                required
                            >

                                <option value="draft">
                                    Draft
                                </option>

                                <option value="published">
                                    Published
                                </option>

                            </select>

                        </div>


                        {/* Buttons */}
                        <div className="d-flex gap-2">

                            <button
                                type="submit"
                                className="btn btn-create px-4"
                            >
                                <i className="bi bi-plus-circle"></i>
                                {' '}Create Blog
                            </button>

                            <button
                                type="reset"
                                className="btn btn-outline-secondary px-4"
                            >
                                Clear
                            </button>

                        </div>

                    </form>

                </div>

            </div>

            <ToastContainer />

        </>

    );

}
