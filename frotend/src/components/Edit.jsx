import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Edit = (prop) => {
  const { id } = useParams();

  const { allValue, categories, putJobs } = prop;

  allValue.filter((x) => x.id == id).map((value) => (
    console.log(value)
  ))

  return (
    <div>
      <Navbar />
      <div className="container m-5">
        <div>
          {allValue
            .filter((x) => x.id == id)
            .map((value) => (
              <form className="form-group" onSubmit={(e) => putJobs(e, id)}>
                <div className="m-4 form-group">
                  <h2>Post a new Job</h2>
                </div>
                <div class="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Category</label>
                  <select className="d-inline form-select w-25" name="select">
                    {categories
                      .filter((x) => Object.keys(x).length !== 0)
                      .map((x) => (
                        <option value={x.id}>{x.name}</option>
                      ))}
                  </select>
                </div>
                <div className="form-check">
                  <label className="col-sm-2 col-form-label">Type</label>
                  <input
                    type="radio"
                    name="radioValue"
                  />
                  <label className="d-inline form-label m-3">Full time</label>
                  <input
                    type="radio"
                    name="radioValue"
                  />
                  <label className="d-inline form-label m-3">Part time</label>
                  <input
                    type="radio"
                    name="radioValue"
                  />
                  <label className="d-inline form-label m-3">Freelance</label>
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Company</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    placeholder="company"
                    name="company"
                    required
                  />
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Logo</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    accept="image/png, image/jpeg"
                    placeholder="Logo"
                    name="Logo"
                  />
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">URl</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    placeholder="URL"
                    name="URL"
                  />
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Position</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    placeholder="Position"
                    name="Position"
                    required
                  />
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Location</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    placeholder="Location"
                    name="Location"
                  />
                </div>
                <div className="m-4 form-group">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <input
                    className="d-inline form-control w-50"
                    type="text"
                    placeholder="Email"
                    name="Email"
                  />
                </div>
                <div className="m-4 form-group d-flex">
                  <label className="col-sm-2 col-form-label">
                    How to Applay
                  </label>
                  <textarea
                    className="w-50 d-inline form-control"
                    style={{ resize: "none" }}
                    cols="30"
                    rows="3"
                    name="Hta"
                    placeholder="how to applay"
                    required
                  ></textarea>
                </div>
                <div className="m-4 form-group d-flex">
                  <label className="col-sm-2 col-form-label">Description</label>
                  <textarea
                    className="w-50 d-inline form-control"
                    style={{ resize: "none" }}
                    cols="30"
                    rows="5"
                    name="Description"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div className="m-4 d-flex justify-content-center">
                  <input
                    className="btn btn-primary w-25"
                    type="submit"
                    value="Edit"
                    required
                  />
                </div>
              </form>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Edit;
