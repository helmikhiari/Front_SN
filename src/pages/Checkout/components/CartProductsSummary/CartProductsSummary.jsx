import "./CartProductsSummary.css";
import React from "react";

export const CartProductsSummary = () => {
  const  cartProducts  = []
  return (
    <div className="product-details-container">
     <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {cartProducts?.map(
          ({ id, img, name, qty, discounted_price }) => (
            <div key={id} className="ordered-product-card">
              <img src={img} alt={name}/>
              <span>
                <span>{name} - </span>
                <span>{qty}</span>
              </span>
              <span>${discounted_price}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};
