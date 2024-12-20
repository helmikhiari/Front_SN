import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { logout, setIsAuth } from "../../../slices/userSlice";
import { clearOrders } from "../../../slices/ordersList";
import { clearWishList } from "../../../slices/wishListSlice";
import { setCartList } from "../../../slices/cartListSlice";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
    dispatch(clearOrders())
    dispatch(clearWishList())
    dispatch(setCartList([]));
    toast.success("You're logged out successfully!");
    navigate("/");
  };
  return (
    <div className="logout-container">
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
