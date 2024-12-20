import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated != null) {
      if (isAuthenticated) navigate("/product-listing");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated == null) <div>Loading...</div>;
  return <>{children}</>;
};

export default Redirect;
