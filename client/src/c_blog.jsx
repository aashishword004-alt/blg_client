
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './c_blog.css';

export default function Create_blog() {

    const [cookies] = useCookies(['token']);
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        categoryId: '',
        status: 'draft'
    });

    const [coverImage, setCoverImage] = useState(null);
    const [preview, setPreview] = useState('');

    const [loading, setLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(true);


    // Fetch Categories
    useEffect(() => {

        const getCategories = async () => {

            try {

                const response = await axios.get(
                    'http://localhost:5000/api/category/'
                );

                if (response.data[1]?.success === 'yes') {

                    setCategories(response.data[3]?.data || []);

                } else {

                    toast.error('Unable to load categories');

                }

            } catch (error) {

                console.log(error);

                toast.error('Category loading failed');

            } finally {

                setCategoryLoading(false);

            }

        };

        getCategories();

    }, []);


    // Handle Input Changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    // Generate Slug
    const slug = formData.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');


    // Handle Image
    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {

            if (!file.type.startsWith('image/')) {
                toast.error('Please select a valid image');
                return;
            }

            setCoverImage(file);

            setPreview(URL.createObjectURL(file));

        }

    };


    // Submit Blog
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!coverImage) {

            toast.error('Please select a cover image');

            return;

        }

        if (!formData.categoryId) {

            toast.error('Please select a category');

            return;

        }

        if (!cookies.token) {

            toast.error('Please login first');

            return;

        }

        const data = new FormData();

        data.append('title', formData.title);
        data.append('excerpt', formData.excerpt);
        data.append('content', formData.content);
        data.append('categoryId', formData.categoryId);
        data.append('status', formData.status);
        data.append('coverImage', coverImage);

        try {

            setLoading(true);

            const response = await axios.post(
                'http://localhost:5000/api/post/create',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${cookies.token}`
                    }
                }
            );

            if (response.data[1]?.success === 'yes') {

                toast.success('Blog created successfully!');

                setTimeout(() => {

                    navigate('/home');

                }, 1500);

            } else {

                toast.error(
                    response.data[2]?.message || 'Blog creation failed'
                );

            }

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.[2]?.message ||
                error.response?.data?.message ||
                'Something went wrong while creating blog'
            );

        } finally {

            setLoading(false);

        }

    };


    // Clear Form
    const handleReset = () => {

        setFormData({
            title: '',
            excerpt: '',
            content: '',
            categoryId: '',
            status: 'draft'
        });

        setCoverImage(null);
        setPreview('');

    };


    return (

        <>

            <ToastContainer position="top-right" autoClose={2000} />

            {/* Navbar */}

            <nav className="navbar navbar-expand-lg">

                <div className="container">

                    <Link className="navbar-brand" to="/home">
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

                <div className="mb-4">

                    <h2 className="page-title">
                        Create New Blog
                    </h2>

                    <p className="text-muted mb-0">
                        Write and publish your blog post.
                    </p>

                </div>


                <div className="form-card">

                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >


                        {/* Title */}

                        <div className="mb-3">

                            <label className="form-label">
                                Blog Title <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Enter blog title"
                                value={formData.title}
                                onChange={handleChange}
                                required
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
                                value={slug}
                                placeholder="blog-title"
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
                                rows="3"
                                placeholder="Write a short description..."
                                value={formData.excerpt}
                                onChange={handleChange}
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
                                rows="10"
                                placeholder="Write your blog content here..."
                                value={formData.content}
                                onChange={handleChange}
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
                                accept="image/*"
                                onChange={handleImage}
                                required
                            />

                            {preview && (

                                <div className="mt-3">

                                    <img
                                        src={preview}
                                        className="image-preview"
                                        alt="Cover preview"
                                    />

                                </div>

                            )}

                        </div>


                        {/* Category */}

                        <div className="mb-3">

                            <label className="form-label">
                                Category <span className="required">*</span>
                            </label>

                            <select
                                className="form-select"
                                name="categoryId"
                                value={formData.categoryId}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    {categoryLoading
                                        ? 'Loading categories...'
                                        : 'Select Category'}
                                </option>

                                {categories.map((category) => (

                                    <option
                                        key={category._id}
                                        value={category._id}
                                    >
                                        {category.name}
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
                                value={formData.status}
                                onChange={handleChange}
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
                                disabled={loading || categoryLoading}
                            >

                                <i className="bi bi-plus-circle"></i>

                                {loading
                                    ? ' Creating...'
                                    : ' Create Blog'}

                            </button>


                            <button
                                type="button"
                                className="btn btn-outline-secondary px-4"
                                onClick={handleReset}
                                disabled={loading}
                            >
                                Clear
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </>

    );

}
