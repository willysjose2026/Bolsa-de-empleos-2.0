import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";
import App from "./App";
import AuthContext from './components/Auth/AuthProvider';

ReactDOM.render(
  <AuthContext>
    <App/>
  </AuthContext>,
  document.getElementById("root")
);
