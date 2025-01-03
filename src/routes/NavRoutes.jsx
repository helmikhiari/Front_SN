import React from "react";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login/Login";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Signup } from "../pages/auth/Signup/Signup";

import { Checkout } from "../pages/Checkout/Checkout";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { Profile } from "../pages/UserProfile/Profile/Profile";

import { Orders } from "../pages/UserProfile/Orders/Orders";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Logout } from "../pages/auth/Logout/Logout";
import Redirect from "../components/redirect";
import { ForgetPassword } from "../pages/auth/forget Password/forgetPassword";
import { ResetPassword } from "../pages/auth/resetPassword/resetPassword";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="/login"
        element={
          <Redirect>
            <Login />
          </Redirect>
        }
      />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route
        path="/signup"
        element={
          <Redirect>
            <Signup />
          </Redirect>
        }
      />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="resetPassword/:token" element={<ResetPassword />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      <Route path="/profile" element={<UserProfile />}>
        <Route
          path="/profile/"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/profile/orders" element={<Orders />} />
        {/* <Route path="/profile/addresses" element={<Addresses />} /> */}
      </Route>
    </Routes>
  );
};
