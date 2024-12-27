import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./UserProfile.css";

export const UserProfile = () => {
  const loading = false;

  const navigate = useNavigate();
  return (
    !loading && (
      <div>
        <div className="user-profile-container">
          <div className="link-container">
            <div
              className="link"
              style={{
                color:
                  window.location.pathname === "/profile" ? "black" : "grey",
              }}
              onClick={() => {
                console.log(window.location);
                navigate("/profile");
              }}
            >
              Profile
            </div>
            <div
              className="link"
              style={{
                color:
                  window.location.pathname === "/profile/orders"
                    ? "black"
                    : "grey",
              }}
              onClick={() => {
                navigate("/profile/orders");
              }}
            >
              Orders
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    )
  );
};
