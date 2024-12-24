import "./ProductDescription.css";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleProduct } from "../../../../Apis/userApis";
import { toggleWhishlist } from "../../../../slices/wishListSlice";

export const ProductDescription = ({ selectedProduct }) => {
  const [sizes, setSizes] = useState([]);
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const isProductInWishlist = () => {
    return wishList.includes(selectedProduct._id);
  };

  const wishlistHandler = async () => {
    const res = await toggleProduct(selectedProduct._id);
    if (res) dispatch(toggleWhishlist(selectedProduct._id));
  };

  useEffect(() => {
    let aux = selectedProduct.productDetails.map((pd) =>
      pd.stock > 0 ? pd.size : null
    );
    setSizes(aux.sort());
  }, [selectedProduct]);

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
        <select style={{ width: 150, fontSize: 17 }}>
          <option disabled>Choose Size</option>
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
          // onClick={() => addToCartHandler(selectedProduct)}
          className="add-to-cart-btn"
        >
          {/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
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
