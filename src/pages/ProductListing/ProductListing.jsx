import React from "react";

import "./ProductListing.css";
import { Filter } from "./components/Filter/Filter";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";

export const ProductListing = () => {
  const loading = false;
  return (
    !loading && (
      <div className="page-container">
        <Filter className="filters" />
        <ProductListingSection className="products-container" />
      </div>
    )
  );
};
