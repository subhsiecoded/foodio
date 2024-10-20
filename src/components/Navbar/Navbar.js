import { React, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

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
        <SearchIcon />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <ShoppingBasketIcon />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};
