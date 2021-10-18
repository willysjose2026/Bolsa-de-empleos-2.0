import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Signup = prop => {

    const { postUser } = prop

  return (
    <div>
      <Navbar />
      <div className="w-100 d-flex justify-content-center">
        <div class="form-group w-50">
          <form onSubmit={postUser}>
            <div className="text-center">
              <label class="form-label mt-4 h3">Sign Up</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="first_name"
              />
              <label for="floatingInput">First name</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="last_name"
              />
              <label for="floatingInput">Last name</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="username"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
                name="password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <div className="text-center m-3">
              <div>
                <input type="submit" className="btn btn-info" value="Sign Up" />
              </div>
              <div className="d-flex justify-content-end">
                <Link className="btn btn-success mt-3" to="/login">
                  Log In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
