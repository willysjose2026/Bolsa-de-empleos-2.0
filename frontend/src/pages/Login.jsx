import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = (prop) => {
  const { verify } = prop;

  return (
    <div>
      <Navbar />
      <div className="w-100 d-flex justify-content-center">
        <div class="form-group w-50">
          <form onSubmit={verify}>
            <div className="text-center">
              <label class="form-label mt-4 h3">Log In</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                name="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="text-center m-3">
              <div>
                <input type="submit" className="btn btn-info" value="Log in" />
              </div>
              <div className="d-flex justify-content-end">
                <Link className="btn btn-success mt-3" to="/signup">
                  Sign up
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

export default Login;
