import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const auth = false;
  const location = useLocation();
  return auth.isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
