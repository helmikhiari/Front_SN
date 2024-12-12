import React from "react";
import "./BillingSummary.css";
export const BillingSummary = () => {
  const orderDetails = {};

  return (
    <div className="billing-container">
      <div className="price-details-container">
        <div>
          <span className="subtotal">Subtotal</span>
          <span>${orderDetails?.cartItemsTotal}</span>
        </div>

        <div>
          <span className="subtotal">Discount</span>
          <span>
            $
            {(
              orderDetails?.cartItemsTotal -
              orderDetails?.cartItemsDiscountTotal
            ).toFixed(2)}
          </span>
        </div>

        <div>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>${orderDetails?.cartItemsDiscountTotal}</span>
        </div>
      </div>
    </div>
  );
};
