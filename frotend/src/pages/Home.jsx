import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";

const Home = (prop) => {
  const { allValue, minLimit, categories, getSearchJobs, search } = prop;

  if (Object.keys(search).length !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }

  console.log(search);

  return (
    <div>
      <Navbar getSearchJobs={getSearchJobs} allValue={allValue} />
      {!search.filter((filt) => Object.keys(filt).length !== 0) ? (
        <div className="container-fluid mt-5">
          <Jobs allValue={allValue} categories={categories} Limit={minLimit} />
          <Footer />
        </div>
      ) : (
        <div>
          <table className="table table-hover mt-2">
            <thead>
              <tr>
                <th scope="col">Ubicacion</th>
                <th scope="col">Posicion</th>
                <th scope="col">Compania</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {search.filter((filt) => Object.keys(filt).length !== 0).map((value) => (
              <tbody>
                <tr className="table-success">
                  <td>{value.location}</td>
                  <td>{value.position}</td>
                  <td>{value.company_name}</td>
                  <td>
                    <Link to={`/view/${value.id}`} className="btn btn-light">
                      View more
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
