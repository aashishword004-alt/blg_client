import Footer from './footer';
import Nevbar from './navbar';
import './profile.css';

export default function Profile()
{
    return(<>
  {/* Navbar */}
 <Nevbar/>
  <div className="container mt-4">
    {/* Profile Information */}
    <div className="profile-card">
      <img
        src="https://i.pravatar.cc/150?img=12"
        className="profile-image"
        alt="Profile Photo"
      />
      <h3 className="profile-name">Ashish Parmar</h3>
      <p className="profile-email">
        <i className="bi bi-envelope" />
        ashish@gmail.com
      </p>
      <p className="profile-bio">
        Software developer and technology enthusiast. I love writing blogs and
        sharing my knowledge about programming and technology.
      </p>
      <button
        className="btn edit-btn"
        data-bs-toggle="modal"
        data-bs-target="#editProfileModal"
      >
        <i className="bi bi-pencil-square" /> Edit Profile
      </button>
    </div>
    {/* Profile Statistics */}
    <div className="row g-3 mt-2 mb-4">
      <div className="col-4">
        <div className="stats-card">
          <h4>12</h4>
          <p>Blogs</p>
        </div>
      </div>
      <div className="col-4">
        <div className="stats-card">
          <h4>150</h4>
          <p>Likes</p>
        </div>
      </div>
      <div className="col-4">
        <div className="stats-card">
          <h4>45</h4>
          <p>Comments</p>
        </div>
      </div>
    </div>
    {/* My Blogs */}
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold" style={{ color: "#1b4332" }}>
        My Blogs
      </h4>
      <a
        href="create-blog.html"
        className="text-success text-decoration-none fw-bold"
      >
        <i className="bi bi-plus-circle" /> Create Blog
      </a>
    </div>
    <div className="row g-3">
      {/* Blog 1 */}
      <div className="col-12 col-md-6">
        <div className="card blog-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
            alt="Web Development"
          />
          <div className="card-body">
            <small className="text-success fw-bold">Technology</small>
            <h5 className="mt-2">Introduction to Web Development</h5>
            <p>
              Learn the basics of web development and create your first website.
            </p>
            <small className="text-muted">
              <i className="bi bi-heart" /> 25 Likes &nbsp;
              <i className="bi bi-chat" /> 10 Comments
            </small>
            <div className="mt-3">
              <button className="btn btn-sm btn-outline-success">
                <i className="bi bi-pencil" /> Edit
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-trash" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="col-12 col-md-6">
        <div className="card blog-card">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            alt="React JS"
          />
          <div className="card-body">
            <small className="text-success fw-bold">Programming</small>
            <h5 className="mt-2">Why Learn React JS?</h5>
            <p>
              Discover how React helps developers build modern user interfaces.
            </p>
            <small className="text-muted">
              <i className="bi bi-heart" /> 40 Likes &nbsp;
              <i className="bi bi-chat" /> 15 Comments
            </small>
            <div className="mt-3">
              <button className="btn btn-sm btn-outline-success">
                <i className="bi bi-pencil" /> Edit
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="bi bi-trash" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Edit Profile Modal */}
  <div className="modal fade" id="editProfileModal" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fw-bold">Edit Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Ashish Parmar"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                defaultValue="ashish@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bio</label>
              <textarea
                className="form-control"
                rows={3}
                defaultValue={"Software developer and technology enthusiast."}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Profile Photo</label>
              <input type="file" className="form-control" accept="image/*" />
            </div>
            <button type="submit" className="btn edit-btn w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Bottom Navigation */}
  <Footer/>
</>
)
}