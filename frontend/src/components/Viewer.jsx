import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Viewer = (prop) => {
  let d = new Date();
  const { id } = useParams();
  const { allValue, category, deleteJobs } = prop;

  const [type, setType] = useState([
    {
      id: 1,
      name: "Full Time",
    },
    {
      id: 2,
      name: "Part Time",
    },
    {
      id: 3,
      name: "FreeLance",
    },
  ]);

  return (
    <div>
      <div className="container-fluid">
        {allValue
          .filter(
            (filter) => category.id == filter.category_id && filter.id == id
          )
          .map((value) => (
            <div className="card mb-3 m-5">
              <h3 className="card-header">Job</h3>
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <h6 className="card-subtitle text-muted">{category.name}</h6>
                <div className="d-flex justify-content-between">
                  <div className="card-body w-100">
                    <p className="card-text">{value.description}</p>
                  </div>
                  <div
                    className="w-25 h-auto m-4"
                    style={{ height: "200px", width: "200px" }}
                  >
                    <img
                      src={value.logo_url}
                      alt=""
                      className="img-thumbnail img-fluid"
                      aria-label="Placeholder: Image cap"
                      focusable="false"
                      role="img"
                      preserveAspectRatio="xMidYMid slice"
                      viewBox="0 0 318 180"
                      style={{ height: "auto", width: "300px" }}
                    />
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>{value.location}</b>
                  </li>
                  <li className="list-group-item">{value.position}</li>
                  <li className="list-group-item">{value.company_name}</li>
                  <li className="list-group-item">{value.email}</li>
                   {type
                    .map((x) => (
                      <div className="list-group-item">
                        {value.job_type_id == x.id ? x.name : ""}
                      </div>
                    ))}
                  <li className="list-group-item">{value.how_to_applay}</li>
                </ul>
                <div className="card-body"></div>
                <div className="card-footer text-muted d-flex justify-content-between">
                  <div>{d.toDateString()}</div>
                  <div>
                      <Link
                        className="btn btn-warning m-1"
                        to={`/edit/${value.id}`}
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => deleteJobs(value.id, value)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Viewer;
