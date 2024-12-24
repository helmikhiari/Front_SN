import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./CartListing.css";
import { useSelector } from "react-redux";

export const CartListing = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart } = useSelector((state) => state.cartList);
  console.log("Heeeere");
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    console.log("CART List " + cart);
    if (cart) {
      let aux = [];
      for (let c of cart) {
        const product = products.find((prod) =>
          prod.productDetails.find((pd) => pd._id == c.productDetailsID)
        );
        console.log("product is " + product);
      }
      setCartProducts(aux);
    }
  }, [cart]);
  return (
    <div className="cart-products-container">
      {cartProducts.map((cart) => (
        <div className="cart-product-card" key={product.id}>
          <div>
            <img className="cart-img" alt={product.name} src={product.img} />
          </div>
          <div className="product-description">
            <h3>{product.name}</h3>
            <p>Price:${product.discounted_price}</p>
            <p>Size: {product.size}</p>
          </div>
          <div className="button-section">
            <div className="count-btn-container">
              <button
                disabled={cartLoading}
                className="counter-btn"
                // onClick={() => cartCountHandler(product, "decrement")}
              >
                -
              </button>
              <span>{product.qty}</span>
              <button
                disabled={cartLoading}
                className="counter-btn"
                // onClick={() => cartCountHandler(product, "increment")}
              >
                +
              </button>
            </div>
            <div className="secondary-btn-section">
              <MdDelete
                size={25}
                // onClick={() => removeFromCartHandler(product)}
              />

              {!isProductInWishlist(product) ? (
                <AiOutlineHeart
                  size={25}
                  // onClick={() => wishlistHandler(product)}
                />
              ) : (
                <AiFillHeart
                  size={25}
                  // onClick={() => wishlistHandler(product)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
