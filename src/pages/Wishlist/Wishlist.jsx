import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleProduct } from "../../Apis/userApis";
import { toggleWhishlist } from "../../slices/wishListSlice";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { wishList } = useSelector((state) => state.wishList);
  const { products } = useSelector((state) => state.products);
  const [favProducts, setFavProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (wishList && products) {
      let aux = [];
      for (let favID of wishList) {
        const p = products.find((product) => product._id == favID);
        aux.push(p);
      }
      setFavProducts(aux);
    }
  }, [wishList, products]);

  const isStock = (productDetails) => {
    const p = productDetails?.find((pd) => pd.stock > 0);
    return !!p;
  };

  const wishlistHandler = async (id) => {
    const res = await toggleProduct(id);
    if (res) dispatch(toggleWhishlist(id));
  };

  const loading = false;

  return (
    !loading &&
    (wishList.length ? (
      <div>
        <h1 className="page-heading">Wishlist</h1>
        <div className="wishlist-products-container">
          {favProducts?.map((product) => (
            <div className="wishlist-card" key={product.name}>
              <div>
                <img
                  className="img-container"
                  alt={product.name}
                  src={product.image}
                />
              </div>

              <div className="product-card-details">
                <h3>{product.name}</h3>
                <div className="price-container">
                  {product.onSale != 1 && (
                    <p className="original-price">
                      ${product.price * product.onSale}
                    </p>
                  )}
                  <p className="discount-price">
                    ${product.price * product.onSale}
                  </p>
                </div>

                <p>Gender: {product.gender}</p>
                <div className="info">
                  {!isStock(product.productDetails) && (
                    <p className="out-of-stock">Out of stock</p>
                  )}
                  {/* {product.trending && <p className="trending">Trending</p>} */}
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
                  onClick={() => wishlistHandler(product._id)}
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
