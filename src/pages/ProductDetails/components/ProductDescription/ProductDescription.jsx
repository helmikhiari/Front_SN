import "./ProductDescription.css";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAPI, toggleProduct } from "../../../../Apis/userApis";
import { toggleWhishlist } from "../../../../slices/wishListSlice";
import toast from "react-hot-toast";
import { addToCart } from "../../../../slices/cartListSlice";
import { useNavigate } from "react-router-dom";

export const ProductDescription = ({ selectedProduct }) => {
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const {isAuthenticated}=useSelector(state=>state.user)
  const { cart } = useSelector((state) => state.cartList);
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isProductInWishlist = () => {
    return wishList.includes(selectedProduct._id);
  };

  const wishlistHandler = async () => {
    const res = await toggleProduct(selectedProduct._id);
    if (res) dispatch(toggleWhishlist(selectedProduct._id));
    else toast.error("Login first");
  };

  const updateSelectedSize = (e) => setSelectedSize(e.target.value);

  const addToCartHandler = async () => {
    if (!isAuthenticated)
    {
      toast.error("Login First")
      return;
    }
    if (isProductInCart()) {
      navigate("/cart");
      return;
    }
    if (selectedSize == 0) {
      toast.error("Please Specify a Size");
      return;
    }
    const productDetail = selectedProduct.productDetails.find(
      (pd) => pd.size == selectedSize
    );
    console.log(productDetail);
    const res = await addToCartAPI(productDetail._id, 1);
    if (res) {
      dispatch(addToCart(res));
      toast.success("Added To Cart");
    } else toast.error("Error Occured");
  };

  useEffect(() => {
    isProductInCart();
  }, [selectedSize]);

  useEffect(() => {
    let aux = selectedProduct.productDetails.map((pd) =>
      pd.stock > 0 ? pd.size : null
    );
    setSizes(aux.sort());
  }, [selectedProduct]);

  const isProductInCart = () => {
    if (selectedSize != 0) {
      const productDetail = selectedProduct.productDetails.find(
        (pd) => pd.size == selectedSize
      );
      const exist = cart.find(
        (cartItem) => cartItem.productDetailsID == productDetail._id
      );
      return !!exist;
    }
  };

  const cartLoading = false;

  return (
    <div className="product-details-description">
      <h1 className="product-name">{selectedProduct?.name}</h1>

      <div className="product-price-container">
        {selectedProduct.onSale < 1 && (
          <span className="product-original-price">
            ${selectedProduct?.price}{" "}
          </span>
        )}
        <span className="product-discount-price">
          {" "}
          ${selectedProduct?.price * selectedProduct.onSale}
        </span>
      </div>

      <p className="description-container">
        <span>Description</span>: {selectedProduct?.description}
      </p>

      <span className="gender-container">
        <span>Gender</span>: {selectedProduct?.gender}
      </span>
      <p className="size-container">
        <span>Size</span>: {selectedProduct?.size}
        <select
          style={{ width: 150, fontSize: 17 }}
          onChange={updateSelectedSize}
          value={selectedSize}
        >
          <option disabled value={0}>
            Choose Size
          </option>
          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </p>

      <div className="tags">
        {/* {selectedProduct?.trending && (
          <span className="trending">
            {selectedProduct?.trending ? "Trending" : ""}
          </span>
        )} */}
      </div>
      <div className="product-card-buttons-container">
        <button
          disabled={cartLoading}
          onClick={addToCartHandler}
          className="add-to-cart-btn"
        >
          {!isProductInCart() ? "Add to cart" : "Go to cart"}
        </button>
        <button
          disabled={cartLoading}
          onClick={wishlistHandler}
          className="add-to-wishlist-btn"
        >
          {!isProductInWishlist() ? "Add to wishlist" : "Remove from wishlist"}
        </button>
      </div>
    </div>
  );
};
