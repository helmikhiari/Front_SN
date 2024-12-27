import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { OrderSummary } from "./components/OrderSummary/OrderSummary";

export const Checkout = () => {
  const cartProducts = [0];
  const navigate = useNavigate();
  const loading = false;
  return (
    !loading &&
    (cartProducts.length ? (
      <div>
        <h1 className="page-heading">Checkout!</h1>
        <div className="checkout-container">
          <OrderSummary />
        </div>
      </div>
    ) : (
      <div className="no-items-container">
        <h2 className="page-heading">No items in your cart to Checkout!</h2>
        <button
          className="explore-btn"
          onClick={() => navigate("/product-listing")}
        >
          Explore
        </button>
      </div>
    ))
  );
};
