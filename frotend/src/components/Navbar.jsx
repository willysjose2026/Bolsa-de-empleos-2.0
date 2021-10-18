import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../components/Auth/useAuth";

const Navbar = ({ getSearchJobs }) => {
  const toggleButton = () => {
    let wrap = document.getElementById("navbarColor01").style;
    if (wrap.display === "none") {
      wrap.display = "block";
    } else {
      wrap.display = "none";
    }
  };

  const { user, login, logout, islogged } = useAuth();


  return (
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-lg-between">
        <h2>Bolsa de empleo</h2>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleButton}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary w-100">
              <div className="container-fluid w-100">
                <div className="d-flex justify-content-between collapse navbar-collapse mt-2 w-100">
                  <form className="d-flex" onSubmit={getSearchJobs}>
                    <Link
                      to="/"
                      className="btn btn-success pe-4 ps-4 me-4 ms-4"
                    >
                      <li className="fas fa-home"></li>
                    </Link>

                    <input
                      className="form-control me-sm-2"
                      type="text"
                      name="name"
                      placeholder="Buscar empleo"
                    />
                    <button
                      className="btn btn-secondary my-2 my-sm-0 ms-3"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                  <div>
                    <ul
                      className="d-flex navbar-nav me-auto ms-5"
                      style={{ listStyle: "none", marginBottom: 0 }}
                    >
                      {/* post button auth */}

                      <li style={{ width: "180px" }}>
                        <Link
                          to="/post"
                          className="btn btn-warning pe-4 ps-4 me-4 ms-4"
                        >
                          Post
                        </Link>
                      </li>
                      <div className="d-flex navbar-nav me-auto ms-5">
                        <li style={{ width: "180px" }}>
                          <Link
                            to="/settings"
                            className="btn btn-dark pe-4 ps-4 me-4 ms-4"
                          >
                            settings
                          </Link>
                        </li>
                      </div>
                      {user === null ? (
                        <div>
                          <Link
                            to="/login"
                            className="btn btn-light pe-4 ps-4 me-4 ms-4 d-inline"
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="btn btn-light pe-4 ps-4 me-4 ms-4 d-inline"
                          >
                            Signup
                          </Link>
                        </div>
                      ) : (
                        <li style={{ width: "180px" }}>
                          <button
                            onClick={logout}
                            className="btn btn-danger pe-4 ps-4 me-4 ms-4"
                          >
                            Log out
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
