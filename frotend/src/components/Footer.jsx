import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-3">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container pt-4">
          </div>{" "}
          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
