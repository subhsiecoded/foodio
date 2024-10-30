import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [sortOrder, setSortOrder] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [initialFoodList, setInitialFoodList] = useState([]);

  // Initialize the randomized list only once per visit
  useEffect(() => {
    const shuffledList = [...food_list].sort(() => Math.random() - 0.5);
    setInitialFoodList(shuffledList);
  }, [food_list]);

  const getSortedFoodList = (list) => {
    let sortedList = [...list];

    if (sortOrder === "lowToHigh") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedList.sort((a, b) => b.price - a.price);
    }

    return sortedList;
  };

  const filteredFoodList = getSortedFoodList(initialFoodList).filter((item) => {
    return category === "All" || category === item.category;
  });

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="food_display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="filter-container">
        <button className="filter-button" onClick={toggleDropdown}>
          Filter
        </button>
        {dropdownOpen && (
          <div className="filter-dropdown">
            <button
              onClick={() => {
                setSortOrder("lowToHigh");
                setDropdownOpen(false);
              }}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => {
                setSortOrder("highToLow");
                setDropdownOpen(false);
              }}
            >
              Price: High to Low
            </button>
          </div>
        )}
      </div>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
