import "./blog.css";
import Footer from "./footer";
import Nevbar from "./navbar";
export default function Blog()
{
    return (<>
        {/* Navbar */}
        <Nevbar />
      
        {/* Create Blog Form */}
        <div className="container mt-4">
            <div className="mb-4">
                <h3 className="page-title">Create New Blog</h3>
                <p className="text-muted">
                    Write and share your thoughts with the community.
                </p>
            </div>
            <div className="create-card">
                <form>
                    {/* Title */}
                    <div className="mb-4">
                        <label className="form-label">Blog Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter your blog title"
                            required=""
                        />
                    </div>
                    {/* Excerpt */}
                    <div className="mb-4">
                        <label className="form-label">Excerpt</label>
                        <textarea
                            className="form-control"
                            name="excerpt"
                            rows={3}
                            placeholder="Write a short description..."
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    {/* Category */}
                    <div className="mb-4">
                        <label className="form-label">Select Category</label>
                        <select className="form-select" name="category_id" required="">
                            <option value="" selected="" disabled="">
                                Select Blog Category
                            </option>
                            <option value={1}>Technology</option>
                            <option value={2}>Programming</option>
                            <option value={3}>Education</option>
                            <option value={4}>Business</option>
                            <option value={5}>Lifestyle</option>
                            <option value={6}>Health</option>
                        </select>
                    </div>
                    {/* Content */}
                    <div className="mb-4">
                        <label className="form-label">Blog Content</label>
                        <textarea
                            className="form-control"
                            name="content"
                            rows={10}
                            placeholder="Write your complete blog content here..."
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    {/* Status */}
                    <div className="mb-4">
                        <label className="form-label">Blog Status</label>
                        <select className="form-select" name="status" required="">
                            <option value="" selected="" disabled="">
                                Select Status
                            </option>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>
                    {/* Buttons */}
                    <div className="d-flex gap-2 flex-wrap">
                        <button type="submit" className="btn publish-btn">
                            <i className="bi bi-check-circle" />
                            Save Blog
                        </button>
                        <a href="home.html" className="btn btn-outline-secondary cancel-btn">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </div>
        {/* Bottom Navigation */}
        <Footer/>
    </>
    )
}