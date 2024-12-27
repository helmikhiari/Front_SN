import "./OrderSummary.css";
import React, { useState } from "react";
import { CartProductsSummary } from "../CartProductsSummary/CartProductsSummary";
import { BillingSummary } from "../BillingSummary/BillingSummary";
import { useDispatch } from "react-redux";
import { DeliveryAddress } from "../DeliveryAddress/DeliveryAddress";

export const OrderSummary = () => {
  return (
    <div className="order-details-container">
      <CartProductsSummary />
      <BillingSummary />
      <DeliveryAddress />
      {/* {userDataState.orderDetails.orderAddress ? (
        <DeliveryAddress />
      ) : (
        <div className="no-address">
          Please provide/select an address to proceed!
        </div>
      )} */}
    </div>
  );
};
