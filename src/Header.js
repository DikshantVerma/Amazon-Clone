import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Ecal_logo_print.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="headerNav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">Hello Rio</span>
            <span className="header__optionlineTwo">Sign in</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/login" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">Returns</span>
            <span className="header__optionlineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/login" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">Your</span>
            <span className="header__optionlineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            <span className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
