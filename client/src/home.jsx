import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import './home.css';
import Nevbar from './navbar';
import { Showerror, Showmessage } from './message';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [blog, Setblog] = useState([]);
  useEffect(() => {
    let url = 'http://localhost:5000/api/post/'
    axios({
      method: 'get',
      responseType: 'json',
      url: url
    }).then((response) => {
      //console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        Showerror(error)
      }
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success == 'no') {
          Showerror(message)
        }
        else {
          Showmessage(message)
          Setblog(response.data[3].data);
         // console.log(response.data[3].data);

        }
      }

    }).catch((error) => {
      if (error === 'ERR_NETWORK') {
        alert('You are Offline');
      }
    })
  }, [])
  return (<>
    {/* Header */}
    <Nevbar />
    <ToastContainer />
    {/* Blog Section */}
    <div className="container-fluid blog-container mt-4">
      <div className="mb-4">
        <h3 className="page-title">Explore Blogs</h3>
        <p className="text-muted">Discover interesting stories and ideas.</p>
      </div>
      {blog.map((items) => (
        <div className="card blog-card" key={items._id}>
          <img
            src={`http://localhost:5000/uploads/${items.coverImage}`}
            alt={items.title}
          />

          <div className="card-body">
            <small className="text-success fw-bold">
              {items.categoryId?.name}
            </small>

            <h5 className="mt-2">{items.title}</h5>

            <p>{items.excerpt}</p>

            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                <i className="bi bi-person-circle" /> {items.authorId?.name}
              </small>

              <button className="btn read-more btn-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Bottom Navigation Footer */}
    <Footer />
  </>

  )
}