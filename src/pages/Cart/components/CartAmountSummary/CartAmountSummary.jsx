import React from "react";
import { Link } from "react-router-dom";
import "./CartAmountSummary.css";

export const CartAmountSummary = () => {


  const totalOriginalPrice = 0;
  const totalDiscountPrice = 0;

  return (
    <div className="cart-price-container">
      <h1>Summary</h1>
      <div className="subtotal-container">
        <span>Sub-total: </span>
        <span>${totalOriginalPrice}</span>
      </div>
      <div className="shipping-container">
        <span>Estimated Delivery & Handling:</span>
        <span>Free</span>
      </div>
      <div className="total">
        <span className="total-container">Total: </span>
        <span>${totalOriginalPrice}</span>
      </div>

      <div className="total-discount-container">
        <span>You saved ${totalDiscountPrice.toFixed(2)} </span>
      </div>

      <Link to="/checkout">Place Order</Link>
    </div>
  );
};
