import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = (prop) => {

  const { categories, postCategories, deleteCategories } = prop;


  return (
    <div>
      <div>
        <Navbar />
        <div className="m-5">
          <form onSubmit={postCategories}>
            <ul>
              {categories
                .filter((value) => Object.keys(value).length !== 0)
                .map((x) => (
                  <div className="d-flex m-1">
                    <li>{x.name}</li>
                    <Link
                      className="btn btn-warning me-3 ms-3"
                      to={`/settings/edit/${x.id}`}
                    >
                      <i className="fas fa-pen"></i>
                    </Link>
                    <button
                      className="btn btn-danger me-3 ms-3"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteCategories(x.id, x);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
            </ul>
            <div className="w-25">
              <label className="form-label mt-4">Categorias</label>
              <input
                type="text"
                className="form-control w-100"
                name="addCategories"
                placeholder="Anadir mas categorias"
              />
              <input
                type="submit"
                value="Anadir"
                className="btn btn-primary mt-2"
                style={{ textAlign: "center" }}
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;
