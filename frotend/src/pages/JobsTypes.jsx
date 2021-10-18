import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagina from "../components/Pagina";

const JobsTypes = ({ allValue, categories }) => {
  const { name } = useParams();


  return (
    <div>
      <Navbar />
      <div className="m-3">
        {categories
          .filter((filt) => filt.name === name)
          .map((value) => (
            <div>
              <h3>{value.name}</h3>
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
                  .filter((filt) => filt.category_id === value.id)
                  .map((value) => (
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
          <Pagina maxTotal={allValue.length * 3} rangeTotal={Math.round(allValue.length / 5)}/>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default JobsTypes;
