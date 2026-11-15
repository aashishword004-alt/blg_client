
import axios from "axios";
import Nevbar from "./navbar";
import "./user.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Showerror, Showmessage } from "./message";
import Footer from "./footer";

export default function User() {

    const [user, Setuser] = useState([]);
    const [search, Setsearch] = useState("");

    useEffect(() => {

        let url = 'http://localhost:5000/api/users/';

        axios({
            method: 'get',
            responseType: 'json',
            url: url
        }).then((response) => {

            console.log(response.data);

            let error = response.data[0]['error'];

            if (error !== 'no') {
                Showerror(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];

                if (success === "no") {
                    Showerror(message);
                }
                else {
                    Showmessage(message);
                    Setuser(response.data[3].data);
                }
            }

        }).catch((error) => {
            console.log(error);
        });

    }, []);

    // Search users by name or email
    const Filteruser = user.filter((users) => {

        return (
            (users.name || "").toLowerCase().includes(search.toLowerCase()) ||
            (users.email || "").toLowerCase().includes(search.toLowerCase())
        );

    });

    return (
        <div className="container-fluid">

            {/* Navbar */}
            <Nevbar />

            <ToastContainer />

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
                        value={search}
                        onChange={(e) => Setsearch(e.target.value)}
                    />
                </div>

                {/* Users List */}
                <div className="row g-4">

                    {Filteruser.length === 0 ? (

                        <div className="col-12 text-center">
                            <h5 className="text-muted">
                                No users found!
                            </h5>
                        </div>

                    ) : (

                        Filteruser.map((users) => {

                            return (
                                <div
                                    className="col-12 col-sm-6 col-lg-4"
                                    key={users.id}
                                >
                                    <div className="user-card">

                                        <img
                                            src={`http://localhost:5000/uploads/profile/${users.profilePhoto}`}
                                            className="user-image"
                                            alt="User"
                                        />

                                        <h5 className="user-name">
                                            {users.name}
                                        </h5>

                                        <p className="user-email">
                                            {users.email}
                                        </p>

                                        <a
                                            href={`user-profile.html?id=${users.id}`}
                                            className="btn view-btn"
                                        >
                                            <i className="bi bi-person"></i>
                                            {" "}View Profile
                                        </a>

                                    </div>
                                </div>
                            );

                        })

                    )}

                </div>
            </div>

            {/* Bottom Navigation */}
           <Footer/>

        </div>
    );
}
