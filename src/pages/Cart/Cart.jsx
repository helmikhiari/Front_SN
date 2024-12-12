import { useState } from "react";
import "./Cart.css";
import { CartListing } from "./components/CartListing/CartListing";
import { useNavigate } from "react-router-dom";
import { CartAmountSummary } from "./components/CartAmountSummary/CartAmountSummary";



export const Cart = () => {
  const cartProducts =[]
  const navigate = useNavigate();
  const  loading  = true;

  return (
    !loading &&
    (cartProducts.length ? (
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
