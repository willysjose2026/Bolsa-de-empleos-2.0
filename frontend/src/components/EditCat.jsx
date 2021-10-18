import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const EditCat = (prop) => {
  const { id } = useParams();
  const { putCategories, categories } = prop;

  return (
    <div>
      <Navbar />
      {categories
      .filter((value) => value.id == id)
      .map((x) => (
        <form
          onSubmit={(e) => {
            putCategories(e, x.id);
          }}
        >
          <div className="w-25 m-5">
            <label className="form-label mt-4">Editar Categorias</label>
            <input
              type="text"
              className="form-control w-100"
              name="EditCategories"
              placeholder="Editar categorias"
            />
            <input
              type="submit"
              value="Editar"
              className="btn btn-primary mt-2"
              style={{ textAlign: "center" }}
            />
          </div>
        </form>
      ))}
      <Footer />
    </div>
  );
};

export default EditCat;
