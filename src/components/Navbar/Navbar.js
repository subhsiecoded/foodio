import { React, useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowLogin, searchItems = [] }) => {
  const [menu, setMenu] = useState("home");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      const results = searchItems.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  const closeSearch = () => {
    setIsSearching(false);
    setSearchQuery("");
    setFilteredItems([]);
  };

  const scrollToItem = (id, category) => {
    const element = document.getElementById(id);
    const categoryElement = document.getElementById(category);
    if (element) {
      if (categoryElement) {
        setMenu("menu");
        const allCategories = document.querySelectorAll(".navbar-menu a");
        allCategories.forEach((cat) => cat.classList.remove("active"));
        categoryElement.classList.add("active");
      }
      element.scrollIntoView({ behavior: "smooth" });
      highlightItem(id);
      closeSearch();
    }
  };

  const highlightItem = (id) => {
    const allItems = document.querySelectorAll(".explore-item");
    allItems.forEach((item) => {
      item.classList.remove("highlight");
    });
    const selectedItem = document.getElementById(id);
    if (selectedItem) {
      selectedItem.classList.add("highlight");
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo2} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="/#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        {isSearching ? (
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for items..."
              className="search-input"
            />
            <CloseIcon onClick={closeSearch} className="close-icon" />
            {filteredItems.length > 0 && (
              <div className="search-results">
                {filteredItems.map((item) => (
                  <div
                    key={item._id}
                    className="search-item"
                    onClick={() => scrollToItem(item._id, item.category)}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className="search-item-info">
                      <p className="search-item-name">{item.name}</p>
                      <p className="search-item-price">₹ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <SearchIcon
              onClick={() => setIsSearching(true)}
              className="search-icon"
            />
            <div className="navbar-search-icon">
              <Link to="/cart">
                <ShoppingBasketIcon />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
          </>
        )}
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};
