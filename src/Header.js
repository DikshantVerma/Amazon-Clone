import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="./">
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
            <span>Hello Rio</span>
            <span>Sign in</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/login" className="header__link">
          <div className="header__Option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/login" className="header__link">
          <div className="header__Option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
      </div>
    </nav>
  );
}

export default Header;
