import React from "react";
import "./BillingSummary.css";
import { useSelector } from "react-redux";
export const BillingSummary = () => {
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
    let discountSum = 0;
    for (let cartItem of cart) {
      const product = getProduct(cartItem);
      sum += product.price * cartItem.quantity;
      discountSum += product.price * cartItem.quantity * product.onSale;
    }
    return [sum, discountSum, sum - discountSum];
  }
  return (
    <div className="billing-container">
      <div className="price-details-container">
        <div>
          <span className="subtotal">Subtotal</span>
          <span>${getTotal()[0]}</span>
        </div>

        <div>
          <span className="subtotal">Discount</span>
          <span>${getTotal()[2]}</span>
        </div>

        <div>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>${getTotal()[1]}</span>
        </div>
      </div>
    </div>
  );
};
