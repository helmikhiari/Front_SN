import { useDispatch, useSelector } from "react-redux";
import "./CartProductsSummary.css";
import React, { useEffect, useState } from "react";

export const CartProductsSummary = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart } = useSelector((state) => state.cartList);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
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
      }
      setCartProducts(aux);
    }
  }, [cart]);

  return (
    <div className="product-details-container">
      <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {cartProducts?.map(({ cartID, image, name, qty, price, onSale }) => (
          <div key={cartID} className="ordered-product-card">
            <img src={image} alt={name} />
            <span>
              <span>{name} - </span>
              <span>{qty}</span>
            </span>
            <span>${price * onSale}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
