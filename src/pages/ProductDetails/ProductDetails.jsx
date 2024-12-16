import "./ProductDetails.css";
import React from "react";
import { useParams } from "react-router-dom";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductDescription } from "./components/ProductDescription/ProductDescription";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const loading = false;
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);
  const selectedProduct = products.find((p) => p._id == productId);

  return (
    !loading && (
      <>
        <div className="products-page-container">
          <ProductImage selectedProduct={selectedProduct} />
          <ProductDescription selectedProduct={selectedProduct} />
        </div>
      </>
    )
  );
};
