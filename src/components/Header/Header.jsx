import "./Header.css";
import { CgHeart } from "react-icons/cg";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GrSearch } from "react-icons/gr";
import { CgShoppingCart } from "react-icons/cg";

import { SiTaichilang } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { setParamSearch } from "../../slices/appSlice";

export const Header = () => {
  const { isAuthenticated: auth } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishList);
  const { cart } = useSelector((state) => state.cartList);
  const navigate = useNavigate();
  const disaptch = useDispatch();
  const [showHamburger, setShowHamburger] = useState(true);
  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  const totalProductsInCart = 0;

  const isProductInCart = () => cart.length > 0;

  const isProductInWishlist = () => wishList.length > 0;
  const { param_search } = useSelector((state) => state.app);
  const handleSeachChange = (e) => disaptch(setParamSearch(e.target.value));

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          <SiTaichilang />
          <span className="brand-name">DadSneakers</span>
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input
          value={param_search}
          onChange={handleSeachChange}
          onKeyDown={(e) => {
            e.key === "Enter" && navigate("/product-listing");
          }}
          placeholder="Search"
        />
        <button>
          <GrSearch />
        </button>
      </div>

      <div
        className={
          !showHamburger
            ? "nav-link-container-mobile nav-link-container"
            : "nav-link-container"
        }
      >
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/product-listing"
        >
          Explore
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to={auth ? "/profile" : "/login"}
        >
          {!auth ? "Login" : "Profile"}
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="wishlist"
        >
          <span>{!showHamburger ? "Wishlist" : ""}</span>
          <CgHeart size={25} className="wishlist" />{" "}
          {isProductInWishlist() && (
            <span className="cart-count cart-count-mobile">
              {wishList.length}
            </span>
          )}
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/cart"
        >
          <span>{!showHamburger ? "Cart" : ""}</span>
          <CgShoppingCart size={25} className="cart" />{" "}
          {isProductInCart() && (
            <span className="cart-count cart-count-mobile">
              {" "}
              {cart.length}{" "}
            </span>
          )}
        </NavLink>
      </div>
      {showHamburger && (
        <div className="hamburger-icon" onClick={() => setShowHamburger(false)}>
          <RxHamburgerMenu size={20} />
        </div>
      )}
      {!showHamburger && (
        <div
          className="cross-tab-icon cross-tab-icon-mobile"
          onClick={() => setShowHamburger(true)}
        >
          <RxCross2 color={"rgb(106, 106, 65)"} size={25} />
        </div>
      )}
    </nav>
  );
};
