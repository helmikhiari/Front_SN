import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useState } from "react";

export const Login = () => {
  const loading = false;
  const [hidePassword, setHidePassword] = useState(true);
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  return (
    !loading && (
      <div className="login-container">
        <h2>Login</h2>
        <form
          // onSubmit={(e) => loginHandler(e, email, password)}
          className="login-body"
        >
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              value={loginCredential.email}
              required
              id="email"
              placeholder="Email Address"
              type="email"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                value={loginCredential.password}
                required
                id="password"
                placeholder="Password"
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

          <div className="remember-me-container">
            <div>
              <input name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Keep me signed in</label>
            </div>

            <p>Forgot your password?</p>
          </div>
          {/* {error && <span className="error">{error}</span>} */}
          <div className="login-btn-container">
            <input value="Login" type="submit" />
          </div>
          <Link className="new-account" to="/signup">
            Create a new account?
          </Link>
        </form>
      </div>
    )
  );
};
