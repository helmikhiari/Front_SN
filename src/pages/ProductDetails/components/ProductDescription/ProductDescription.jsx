import "./ProductDescription.css";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

export const ProductDescription = ({ selectedProduct }) => {
  const [sizes, setSizes] = useState([]);
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
