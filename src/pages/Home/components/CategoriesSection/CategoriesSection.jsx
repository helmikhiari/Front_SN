import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";
import imgmen from "../../../../images/category-images/hero-image-men-1.png";
import imgwomen from "../../../../images/category-images/hero-image-women-1.png";
import imgkids from "../../../../images/category-images/hero-image-kids-1.png";
export const CategoriesSection = () => {
  const state = {};

  const Category = ({ categoryName, img }) => {
    return (
      <Link
        // onClick={() =>
        //   dispatch({
        //     type: "ADD_CATEGORIES_FROM_HOME",
        //     payload: categoryName,
        //   })
        // }
        to="/product-listing"
        className="category-card"
      >
        <h3>{categoryName}'s</h3>
        <div className="img-cont">
          <img src={img} alt={categoryName} />
        </div>
      </Link>
    );
  };

  return (
    <div>
      <h1 className="categories-heading">Shop By Categories</h1>
      <div className="categories-container">
        <Category categoryName="Men" img={imgmen} />
        <Category categoryName="Women" img={imgwomen} />
        <Category categoryName="Kids" img={imgkids} />
      </div>
    </div>
  );
};
