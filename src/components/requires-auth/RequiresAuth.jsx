import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const {isAuthenticated:auth}=useSelector((state)=>state.user);
  const location = useLocation();
  return auth ? children : <Navigate to="/login" state={{ from: location }} />;
};
