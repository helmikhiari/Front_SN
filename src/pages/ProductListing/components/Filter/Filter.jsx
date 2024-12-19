import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../../../slices/productSlice";

export const Filter = () => {
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(false);
  const { products, filteredProducts } = useSelector((state) => state.products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState(null);
  const [price, setPrice] = useState([]);
  const dispatch = useDispatch();

  const allCategories = ["men", "women", "kids"];
  const reset = () => {
    setSort(null);
    dispatch(setFilteredProducts(products));
  };

  const handlePriceChange = (index) => {
    const exist = price.indexOf(index);
    if (exist >= 0) setPrice(price.filter((i) => i != index));
    else setPrice([...price, index]);
  };

  const handleFilterChange = () => {
    let aux = products;
    if (selectedCategories.length != 0) {
      aux = aux.filter((produit) =>
        selectedCategories.includes(produit.gender)
      );
    }
    if (price.length > 0) {
      let aux2 = [];
      if (price.includes(0)) aux2 = aux.filter((p) => p.price * p.onSale < 200);
      if (price.includes(1))
        aux2 = [
          ...aux2,
          ...aux.filter(
            (p) => p.price * p.onSale > 200 && p.price * p.onSale < 1000
          ),
        ];
      if (price.includes(2))
        aux2 = [
          ...aux2,
          ...aux.filter(
            (p) => p.price * p.onSale >= 1000 && p.price * p.onSale < 2000
          ),
        ];
      if (price.includes(3))
        aux2 = [...aux2, ...aux.filter((p) => p.price * p.onSale >= 2000)];
      aux = aux2;
    }

    if (sort) {
      aux = [...aux].sort((p1, p2) =>
        sort == 1
          ? p1.price * p1.onSale - p2.price * p2.onSale
          : p2.price * p2.onSale - p1.price * p1.onSale
      );
    }
    dispatch(setFilteredProducts(aux));
  };

  useEffect(() => {
    if (selectedCategories && price) handleFilterChange();
  }, [selectedCategories, sort, price]);

  const handleCheck = (e, categoryName) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cn) => cn != categoryName)
      );
    }
  };
  const handleSort = (e) => {
    e.target.id == "low-to-high" ? setSort(1) : setSort(-1);
  };

  return (
    <div>
      <div
        className={
          isFilterMenuOn
            ? "filter-container filter-container-mobile-open"
            : "filter-container filter-container-mobile-closed"
        }
      >
        <div
          className={
            !isFilterMenuOn
              ? "filter-header filter-header-mobile-closed"
              : "filter-header filter-header-mobile-open"
          }
        >
          <span
            className="close-tab"
            onClick={() => setIsFilterMenuOn(!isFilterMenuOn)}
          >
            {!isFilterMenuOn ? <TbAdjustmentsHorizontal /> : <RxCross2 />}
          </span>
          <h2>Filters</h2>

          <button
            className={isFilterMenuOn ? "reset-btn" : "reset-btn-hide"}
            onClick={reset}
          >
            Reset
          </button>
        </div>

        <div
          className={
            isFilterMenuOn
              ? "filter-types-container filter-types-container-mobile"
              : "filter-types-container"
          }
        >
          <div className="price-container">
            <h3>Price</h3>
            <div className="price-input-container">
              <label htmlFor="below-200">
                Below $200
                <input
                  onClick={() => handlePriceChange(0)}
                  id="below-200"
                  type="checkbox"
                />
              </label>

              <label htmlFor="201-999">
                $201 - $999
                <input
                  onClick={() => handlePriceChange(1)}
                  id="201-999"
                  type="checkbox"
                />
              </label>

              <label htmlFor="1000-1999">
                $1000 - $1999
                <input
                  onClick={() => handlePriceChange(2)}
                  id="1000-1999"
                  type="checkbox"
                />
              </label>

              <label htmlFor="above 2000">
                Over $2000
                <input
                  onClick={() => handlePriceChange(3)}
                  id="above 2000"
                  type="checkbox"
                />
              </label>
            </div>
          </div>

          {/* <div className="ratings-container ratings-container-mobile">
            <h3>Ratings (min)</h3>
            <div className="input-range">
              <datalist id="markers">
                <option label="0" value="0">
                  0
                </option>
                <option label="2.5" value="2.5">
                  2.5
                </option>
                <option label="5.0" value="5">
                  5
                </option>
              </datalist>
              <input
                step="0.1"
                onChange={(e) =>
                  dispatch({
                    type: "ADD_RATINGS",
                    payload: Number(e.target.value),
                  })
                }
                // list="markers"
                id="price"
                type="range"
                min="0"
                max="5.0"
                value={state.filters.rating}
              />
            </div>
          </div> */}

          <div className="category-container">
            <h3>Categories</h3>
            <div className="category-input-container">
              {allCategories.map((categoryName) => (
                <div className="category-input-container" key={categoryName}>
                  <label htmlFor={`category-${categoryName}`}>
                    {`${categoryName}'s wear`}
                    <input
                      onChange={(e) => handleCheck(e, categoryName)}
                      id={`category-${categoryName}`}
                      type="checkbox"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="sorting-container">
            <h3>Sort by price</h3>

            <div className="sorting-input-container">
              <label htmlFor="high-to-low">
                Price-high to low
                <input
                  checked={sort == -1}
                  onChange={handleSort}
                  name="sort"
                  id="high-to-low"
                  type="radio"
                />
              </label>

              <label htmlFor="low-to-high">
                Price-low to high
                <input
                  checked={sort == 1}
                  onChange={handleSort}
                  name="sort"
                  id="low-to-high"
                  type="radio"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
