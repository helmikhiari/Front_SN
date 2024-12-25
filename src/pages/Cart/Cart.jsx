import { useState } from "react";
import "./Cart.css";
import { CartListing } from "./components/CartListing/CartListing";
import { useNavigate } from "react-router-dom";
import { CartAmountSummary } from "./components/CartAmountSummary/CartAmountSummary";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartList);

  const navigate = useNavigate();
  const loading = false;
  return (
    !loading &&
    (cart.length>0 ? (
      <div>
        <h1 className="page-heading">Cart</h1>
        <div className="cart-container">
          <CartListing />
          <div>
            {/* <Coupons
              couponSelected={couponSelected}
              setCouponSelected={setCouponSelected}
            /> */}
            <CartAmountSummary />
          </div>
        </div>
      </div>
    ) : (
      <div className="no-items-container">
        <h2 className="page-heading">Cart is Empty!</h2>
        <button
          className="explore-btn"
          onClick={() => navigate("/product-listing")}
        >
          Explore
        </button>
      </div>
    ))
  );
};
