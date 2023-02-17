import React from "react";

import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
 
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    alert("User not logged in")
    return <Navigate to="/login" replace state={{ data: location.pathname }} />

  }
  return children;
};