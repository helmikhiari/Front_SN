import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-hot-toast";
import React from "react";



export const Signup = () => {
  const  loading  = false

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const navigate = useNavigate();

  const [signupCredential, setSignupCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });



  return (
    !loading && (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // signupHandler();
          }}
          className="signup-body"
        >
          <div className="email-container">
            <label htmlFor="email">Email Address</label>
            <input
              required
              onChange={(e) =>
                setSignupCredential({
                  ...signupCredential,
                  email: e.target.value,
                })
              }
              id="email"
              placeholder="Enter Email"
              type="email"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                required
                onChange={(e) =>
                  setSignupCredential({
                    ...signupCredential,
                    password: e.target.value,
                  })
                }
                id="password"
                minLength="8"
                placeholder="Enter Password"
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

          <div className="confirm-password-container">
            <label for="confirm-password">Confirm Password</label>
            <div className="input-container">
              <input
                required
                id="confirm-password"
                onChange={(e) =>
                  setSignupCredential({
                    ...signupCredential,
                    confirmPassword: e.target.value,
                  })
                }
                minLength="8"
                placeholder="Enter Password Again"
                type={hidePassword ? "password" : "text"}
              />{" "}
              {!hidePassword ? (
                <BsEye
                  className="hide-show-password-eye"
                  onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                />
              ) : (
                <BsEyeSlash
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              )}
            </div>
          </div>

          <div className="name-container">
            <label htmlFor="first-name">First Name</label>
            <input
              onChange={(e) =>
                setSignupCredential({
                  ...signupCredential,
                  firstName: e.target.value,
                })
              }
              id="first-name"
              placeholder="Enter First Name"
              type="text"
            />
          </div>

          <div className="name-container">
            <label htmlFor="last-name">Last Name</label>
            <input
              onChange={(e) =>
                setSignupCredential({
                  ...signupCredential,
                  lastName: e.target.value,
                })
              }
              id="last-name"
              placeholder="Enter Last Name"
              type="text"
            />
          </div>

          <div className="remember-me-container">
            <div>
              <input required name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">
                I accept all terms and conditions
              </label>
            </div>
          </div>
          <div className="signup-btn-container">
            <input value="Sign Up" type="submit" />
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    )
  );
};
