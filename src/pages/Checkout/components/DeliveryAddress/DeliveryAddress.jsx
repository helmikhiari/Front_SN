import "./DeliveryAddress.css";
import { v4 as uuid } from "uuid";

import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { purchaseAPI } from "../../../../Apis/userApis";
import { setCartList } from "../../../../slices/cartListSlice";

export const DeliveryAddress = () => {
  const { lastName, firstName } = useSelector((state) => state.user);
  const handleOrder = async () => {
    const res = await purchaseAPI();
    if (res) {
      toast.success("Order Placed Successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      toast.error("Error Occured");
    }
  };

  return (
    <div className="delivery-address-container">
      <p>Delivering To</p>

      <div className="delivery-address-description">
        <span className="name">Name: {lastName + " " + firstName}</span>
        <span className="address">Address:</span>
        <span className="contact">Contact:</span>
        <button onClick={handleOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};
