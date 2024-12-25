import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import "./CartListing.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCartAPI,
  toggleProduct,
  updateCartAPI,
} from "../../../../Apis/userApis";
import { toggleWhishlist } from "../../../../slices/wishListSlice";
import {
  minusQuantity,
  plusQuantity,
  deleteFromCart as dfc,
} from "../../../../slices/cartListSlice";
export const CartListing = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart } = useSelector((state) => state.cartList);
  const { wishList } = useSelector((state) => state.wishList);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("CART List " + JSON.stringify(cart));
    if (cart.length > 0) {
      let aux = [];
      for (let c of cart) {
        const product = products.find((prod) =>
          prod.productDetails.find((pd) => pd._id == c.productDetailsID)
        );
        console.log("pp" + product);
        const pd = product.productDetails.find(
          (pd) => pd._id == c.productDetailsID
        );
        aux.push({
          cartID: c._id,
          name: product.name,
          price: product.price,
          onSale: product.onSale,
          image: product.image,
          size: pd.size,
          qty: c.quantity,
          stock: pd.stock,
          productID: product._id,
          pdID: pd._id,
        });
        // console.log("pr" + JSON.stringify(product));
      }
      console.log("aux", aux);
      setCartProducts(aux);
    }
  }, [cart]);

  const isProductInWishlist = (id) => {
    return wishList.includes(id);
  };

  const wishlistHandler = async (id) => {
    const res = await toggleProduct(id);
    if (res) dispatch(toggleWhishlist(id));
    else toast.error("Login First");
  };

  const minusQty = async (cartID) => {
    const res = await updateCartAPI(cartID, -1);
    if (res) {
      dispatch(minusQuantity(cartID));
    }
  };

  const plusQty = async (cartID) => {
    const res = await updateCartAPI(cartID, 1);
    if (res) {
      dispatch(plusQuantity(cartID));
    }
  };

  const deleteFromCart = async (cartID) => {
    const res = await deleteFromCartAPI(cartID);
    if (res) {
      dispatch(dfc(cartID));
    }
  };

  return (
    <div className="cart-products-container">
      {cartProducts.map((product) => (
        <div className="cart-product-card" key={product.id}>
          <div>
            <img className="cart-img" alt={product.name} src={product.image} />
          </div>
          <div className="product-description">
            <h3>{product.name}</h3>
            <p>Price:${product.onSale * product.price}</p>
            <p>Size: {product.size}</p>
          </div>
          <div className="button-section">
            <div className="count-btn-container">
              <button
                disabled={product.qty == 1}
                className="counter-btn"
                onClick={() => minusQty(product.cartID)}
              >
                -
              </button>
              <span>{product.qty}</span>
              <button
                disabled={!(product.qty < product.stock)}
                className="counter-btn"
                onClick={() => plusQty(product.cartID)}
              >
                +
              </button>
            </div>
            <div className="secondary-btn-section">
              <MdDelete
                size={25}
                onClick={() => deleteFromCart(product.cartID)}
              />

              <div
                onClick={() => wishlistHandler(product.productID)}
                className={
                  isProductInWishlist(product.productID)
                    ? "heart-container"
                    : null
                }
              >
                {!isProductInWishlist(product.productID) ? (
                  <AiOutlineHeart color="red" size={30} />
                ) : (
                  <AiTwotoneHeart color="red" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
