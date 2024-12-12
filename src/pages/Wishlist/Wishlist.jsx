import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const navigate = useNavigate();

  const loading = false;
  const wishlist = [];
  return (
    !loading &&
    (wishlist.length ? (
      <div>
        <h1 className="page-heading">Wishlist</h1>
        <div className="wishlist-products-container">
          {wishlist?.map((product) => (
            <div className="wishlist-card" key={product.name}>
              <div>
                <img
                  className="img-container"
                  alt={product.name}
                  src={product.img}
                />
              </div>

              <div className="product-card-details">
                <h3>{product.name}</h3>
                <p className="ratings">
                  {product.rating}
                  <BsFillStarFill color="orange" /> ({product.reviews} reviews){" "}
                </p>
                <div className="price-container">
                  <p className="original-price">${product.original_price}</p>
                  <p className="discount-price">${product.discounted_price}</p>
                </div>

                <p>Gender: {product.category_name}</p>
                <div className="info">
                  {!product.is_stock && (
                    <p className="out-of-stock">Out of stock</p>
                  )}
                  {product.trending && <p className="trending">Trending</p>}
                </div>
              </div>

              <div className="wishlist-btn-container">
                <button
                  className="cart-wishlist-btn"
                  // onClick={() =>
                  //   !isProductInCart(product)
                  //     ? addToCartHandler(product)
                  //     : cartCountHandler(product, "increment")
                  // }
                ></button>
                <button
                  className="remove-from-wishlist-btn"
                  // onClick={() => removeFromWishlistHandler(product)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="wishlist-empty-container">
        <h2 className="page-heading">Wishlist is Empty</h2>
        <button onClick={() => navigate("/product-listing")}>Explore</button>
      </div>
    ))
  );
};
