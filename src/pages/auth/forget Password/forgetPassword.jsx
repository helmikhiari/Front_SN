import React, { useState } from "react";
import "./forgetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { forgetPasswordAPI } from "../../../Apis/authApis";
import toast from "react-hot-toast";

export const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const changeEmail = (e) => setEmail(e.target.value);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const sendEmailHandler = async (e) => {
    setLoading(true);
    setError({})
    e.preventDefault();
    if (email == "" || !email.includes("@")) {
      setError({ email: "Invalid Email" });
      setLoading(false);
      return;
    }
    const res = await forgetPasswordAPI(email);
    if (res.success) {
      toast.success(res.success);
      
    } else {
      if (res.email) {
        setError(res);
      } else {
        toast.error(res.error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Forget Password</h2>
      <form onSubmit={sendEmailHandler} className="login-body">
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            required
            id="email"
            name="email"
            onChange={changeEmail}
            placeholder="Email Address"
            type="email"
          />
        </div>
        {error.email && <span className="error">{error.email}</span>}

        {/* <div className={loading ? "disabled" : "login-btn-container"}> */}
        <button
          type="submit"
          disabled={loading}
          className={loading ? "disabledButton" : "actifButton"}
        >
          Envoyer
        </button>
        {/* </div> */}

        <Link className="new-account" to="/login">
          Remember You Password ? Login
        </Link>
      </form>
    </div>
  );
};
