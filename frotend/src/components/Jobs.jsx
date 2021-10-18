import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ allValue, categories, Limit }) => {
  return (
    <div>
      {categories
        .filter((value) => Object.keys(value).length !== 0)
        .map((value) => (
          <div className="mt-3">
            <li className="btn btn-info">{value.name}</li>
            <table className="table table-hover mt-2">
              <thead>
                <tr>
                  <th scope="col">Ubicacion</th>
                  <th scope="col">Posicion</th>
                  <th scope="col">Compania</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {allValue
                .filter((filt) => filt.category_id == value.id)
                .slice(0, Limit)
                .map((x) => (
                  <tbody>
                    <tr className="table-success">
                      <td>{x.location}</td>
                      <td>{x.position}</td>
                      <td>{x.company_name}</td>
                      <td>
                        <Link to={`/view/${x.id}`} className="btn btn-light">
                          View more
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              <div>
                <Link to={`/jobs/${value.name}`} className="btn btn-dark mt-1 mb-2">See more</Link>
              </div>
            </table>
          </div>
        ))}
    </div>
  );
};

export default Jobs;
