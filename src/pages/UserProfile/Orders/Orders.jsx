import React from "react";
import "./Orders.css";
import { useSelector } from "react-redux";

export const Orders = () => {
  const { ordersList } = useSelector((state) => state.ordersList);
  const { products } = useSelector((state) => state.products);

  function getProduct(pdID) {
    const product = products.find((prod) =>
      prod.productDetails.find((pd) => pd._id == pdID)
    );
    return product;
  }

  return !ordersList?.length ? (
    <div className="orders-container">No Orders</div>
  ) : (
    <div className="orders-container">
      {ordersList?.map(({ totalPrice, _id, orders: orderedProducts }) => (
        <div key={_id} className="ordered-items-card">
          <div className="order-id-container">
            <span>Order ID: </span>
            <span>{_id}</span>
          </div>

          <div className="price-container">
            <span>Amount: </span>
            <span>${totalPrice}</span>
          </div>

          <div className="products-container">
            {orderedProducts?.map(({ productDetailsID, quantity }) => {
              const { image, name, price, onSale } =
                getProduct(productDetailsID);
              // console.log("pppp" + productDetailsID);
              return (
                <div className="products-card">
                  <img src={image} alt={name} />
                  <div className="description">
                    <span className="name">Name: {name}</span>
                    <span className="qty">Qty: {quantity}</span>
                    <span className="price">Price: ${price * onSale}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
