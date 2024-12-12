import "./ProductDescription.css";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

export const ProductDescription = ({ selectedProduct }) => {
  const cartLoading=false;

  return (
    <div className="product-details-description">
      <h1 className="product-name">{selectedProduct?.name}</h1>


      <div className="product-price-container">
        <span className="product-original-price">
          ${selectedProduct?.original_price}{" "}
        </span>
        <span className="product-discount-price">
          {" "}
          ${selectedProduct?.discounted_price}
        </span>
      </div>

      <p className="description-container">
        <span>Description</span>: {selectedProduct?.description}
      </p>

      <span className="gender-container">
        <span>Gender</span>: {selectedProduct?.category_name}
      </span>
      <p className="size-container">
        <span>Size</span>: {selectedProduct?.size}
      </p>

      <div className="tags">
        {!selectedProduct?.is_stock && (
          <span className="out-of-stock">
            {selectedProduct?.is_stock ? "In Stock" : "Out of stock"}
          </span>
        )}
        {/* {selectedProduct?.trending && (
          <span className="trending">
            {selectedProduct?.trending ? "Trending" : ""}
          </span>
        )} */}
      </div>
      <div className="product-card-buttons-container">
        <button disabled={cartLoading}
          // onClick={() => addToCartHandler(selectedProduct)}
          className="add-to-cart-btn"
        >
          {/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
        </button>
        <button disabled={cartLoading}
          // onClick={() => wishlistHandler(selectedProduct)}
          className="add-to-wishlist-btn"
        >
          {/* {!isProductInWishlist(selectedProduct)
            ? "Add to wishlist"
            : "Remove from wishlist"} */}
        </button>
      </div>
    </div>
  );
};
