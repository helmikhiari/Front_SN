import React from "react";
import { Link } from "react-router-dom";
import "./CartAmountSummary.css";
import { useSelector } from "react-redux";

export const CartAmountSummary = () => {
  const { cart } = useSelector((state) => state.cartList);
  const { products } = useSelector((state) => state.products);

  function getProduct(c) {
    const product = products.find((prod) =>
      prod.productDetails.find((pd) => pd._id == c.productDetailsID)
    );
    return product;
  }

  function getTotal() {
    let sum = 0;
    let discountSum=0
    for (let cartItem of cart) {
      const product = getProduct(cartItem);
      sum += product.price *cartItem.quantity;
      discountSum+=product.price *cartItem.quantity*product.onSale;
    }
    return [sum,discountSum,sum-discountSum];
  }

  return (
    <div className="cart-price-container">
      <h1>Summary</h1>
      <div className="subtotal-container">
        <span>Sub-total: </span>
        <span>${getTotal()[0]}</span>
      </div>
      <div className="shipping-container">
        <span>Estimated Delivery & Handling:</span>
        <span>Free</span>
      </div>
      <div className="total">
        <span className="total-container">Total: </span>
        <span>${getTotal()[1]}</span>
      </div>

      <div className="total-discount-container">
        <span>You saved ${
        getTotal()[2]} </span>
      </div>

      <Link to="/checkout">Place Order</Link>
    </div>
  );
};
