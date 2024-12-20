import React from "react";
import { Logout } from "../../auth/Logout/Logout";
import "./Profile.css";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { firstName, lastName, email } = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="name">
          <span>Full Name: </span>
          <span>
            {" "}
            {firstName} {lastName}{" "}
          </span>
        </div>

        <div className="email">
          <span>Email: </span>
          <span> {email} </span>
        </div>
      </div>
      <Logout />
    </div>
  );
};
