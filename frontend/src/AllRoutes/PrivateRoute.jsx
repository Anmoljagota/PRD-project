import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const admintoken = localStorage.getItem("AdminLogin");
  console.log("i am admin Login", admintoken);
  if (admintoken === null) {
    return <Navigate to="/adminlogin" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
