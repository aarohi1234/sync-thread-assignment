import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";

import { Link, useNavigate } from "react-router-dom";
import { Map } from "../Components/Map";
import { PrivateRoute } from "../Components/PrivatRoute";

export const AllRoutes = () => {
  const navigate = useNavigate();
  const [token, settoken] = React.useState(null);
  const ProtectedRoute = ({ token, children }) => {
    const Dashboard = () => {
    if (!token) {
    
      alert("Please Login First");
      navigate("/login");
    } 
  };
}


  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map" element={
      <PrivateRoute> <Map /></PrivateRoute>
      
     } />
    
         

      
    </Routes>
  );
};
