import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import { login } from "../../../Apis/authApis";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../../slices/userSlice";
import { handleLoginState } from "../../../utils/userState";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({});
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginCredential({ ...loginCredential, [e.target.name]: e.target.value });
  };
  const loginHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const rep = await login(loginCredential);
    if (rep.token) {
      localStorage.setItem("token", rep.token);
      await handleLoginState(dispatch);
      navigate("/product-listing");
    } else {
      setErrors(rep);
    }
    setLoading(false);
  };

  return (
    !loading && (
      <div className="login-container">
        <h2>Login</h2>
        <form
          onSubmit={(e) => loginHandler(e, email, password)}
          className="login-body"
        >
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              value={loginCredential.email}
              required
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                value={loginCredential.password}
                required
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                type={hidePassword ? "password" : "text"}
              />{" "}
              {!hidePassword ? (
                <BsEye
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              ) : (
                <BsEyeSlash
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              )}
            </div>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
          <div className="remember-me-container">
            <div>
              <input name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Keep me signed in</label>
            </div>

            <p>Forgot your password?</p>
          </div>
          {errors.error && <span className="error">{errors.error}</span>}
          <div className="login-btn-container">
            <input value="Login" type="submit" disabled={loading} />
          </div>

          <Link className="new-account" to="/signup">
            Create a new account?
          </Link>
        </form>
      </div>
    )
  );
};
