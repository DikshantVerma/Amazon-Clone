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

      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
    </nav>
  );
}

export default Header;
