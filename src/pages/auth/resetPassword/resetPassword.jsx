import React, { useState } from "react";
import "./resetPassword.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { resetPasswordAPI } from "../../../Apis/authApis";

export const ResetPassword = () => {
  const [data, setData] = useState({ newPassword: "", confirmNewPassword: "" });
  const handlChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const navigate = useNavigate();
  const { token } = useParams();

  const [error, setError] = useState(null);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    if (data.newPassword != data.confirmNewPassword) {
      setError("Passwords doesn't Match");
      return;
    }
    if (data.newPassword == "") {
      setError("Empty Password!");
      return;
    }
    const res = await resetPasswordAPI(token, data.newPassword);
    if (res === 1) {
      toast.success("Password Changed");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      if (res === 2) {
        setError("New Password Can't be the same as the Old Password!");
      } else {
        toast.error("Error Occured");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={resetPasswordHandler} className="login-body">
        <div className="email-container">
          <label htmlFor="email">New Pasword</label>
          <input
            value={data.newPassword}
            required
            name="newPassword"
            onChange={handlChange}
            placeholder="New Passowrd"
            type="password"
          />
        </div>

        <div className="email-container">
          <label htmlFor="email">Confirm New Password</label>
          <input
            value={data.confirmNewPassword}
            required
            name="confirmNewPassword"
            onChange={handlChange}
            placeholder="Confirm New Passowrd"
            type="password"
          />
        </div>
        {error && <span className="error">{error}</span>}
        {/* <div className={loading ? "disabled" : "login-btn-container"}> */}
        <button type="submit" className={"actifButton"}>
          Reset Password
        </button>
        {/* </div> */}

        {/* <Link className="new-account" to="/login">
          Remember You Password ? Login
        </Link> */}
      </form>
    </div>
  );
};
