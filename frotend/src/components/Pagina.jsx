import { useState } from "react";
import Pagination from "react-js-pagination";

const Pagina = ({ maxTotal, rangeTotal }) => {
  const [state, setState] = useState(1);
  const handlePageChange = (pageNumber) => {
    setState({ activePage: pageNumber });
    console.log("this page is: ", pageNumber);
  };

  console.log(maxTotal);
  console.log(rangeTotal);
  

  return (
    <div>
      <Pagination
        activePage={state}
        itemsCountPerPage={10}
        totalItemsCount={20}
        pageRangeDisplayed={maxTotal}
        innerClass="pagination"
        itemClass="page-item"
        linkClass="page-link"
        activeClass="page-item active"
        activeLinkClass="page-link active"
        
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Pagina;
