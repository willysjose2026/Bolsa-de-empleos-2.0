import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Viewer from "../components/Viewer";

const View = (prop) => {
  const { allValue, categories, putJobs, deleteJobs } = prop;

  return (
    <div>
      <Navbar />
      {categories.map((category) => (
        <Viewer allValue={allValue} category={category} putJobs={putJobs} deleteJobs={deleteJobs} />
      ))}
      <Footer />
    </div>
  );
};

export default View;
