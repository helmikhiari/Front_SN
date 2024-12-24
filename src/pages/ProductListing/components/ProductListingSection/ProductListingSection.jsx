import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleProduct } from "../../../../Apis/userApis";
import { toggleWhishlist } from "../../../../slices/wishListSlice";

export const ProductListingSection = () => {
  const { filteredProducts } = useSelector((state) => state.products);
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  console.log("fff" + filteredProducts);
  const isStock = (productDetails) => {
    const p = productDetails?.find((pd) => pd.stock > 0);
    return !!p;
  };

  const isProductInWishlist = (id) => {
    return wishList.includes(id);
  };

  const wishlistHandler = async (id) => {
    const res = await toggleProduct(id);
    if (res) dispatch(toggleWhishlist(id));
  };

  return (
    <div className="product-card-container">
      {!filteredProducts.length ? (
        <h2 className="no-products-found">
          Sorry, there are no matching products!
        </h2>
      ) : (
        filteredProducts.map((product) => {
          const {
            _id,
            name,
            price,
            onSale,
            gender,
            is_stock,
            image,
            productDetails,
          } = product;
          console.log(productDetails);
          return (
            <Tilt
              key={product._id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={false}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="product-card" key={_id}>
                <Link to={`/product-details/${_id}`}>
                  <div className="product-card-image">
                    <Tilt
                      transitionSpeed={2000}
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.18}
                    >
                      <img src={image} />
                    </Tilt>
                  </div>
                </Link>

                <div className="product-card-details">
                  <h3>{name}</h3>
                  <div className="price-container">
                    {onSale < 1 && <p className="original-price">${price}</p>}
                    <p className="discount-price">${price * onSale}</p>
                  </div>

                  <p>Gender: {gender}</p>
                  <div className="info">
                    {!isStock(productDetails) && (
                      <p className="out-of-stock">Out of stock</p>
                    )}
                    {/* {trending && <p className="trending">Trending</p>} */}
                  </div>
                </div>

                <div className="product-card-buttons">
                  {/* <button
                    disabled={cartLoading}
                    onClick={() => addToCartHandler(product)}
                    className="cart-btn"
                  >
                    {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"}
                  </button> */}
                  <button
                    onClick={() => wishlistHandler(_id)}
                    className="wishlist-btn"
                  >
                    <div
                      className={
                        isProductInWishlist(_id) ? "heart-container" : null
                      }
                    >
                      {!isProductInWishlist(_id) ? (
                        <AiOutlineHeart color="red" size={30} />
                      ) : (
                        <AiTwotoneHeart color="red" size={30} />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </Tilt>
          );
        })
      )}
    </div>
  );
};
