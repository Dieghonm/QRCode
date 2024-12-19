import React from "react";

import headerImg from "../svg/headerImg.png";
import "../style/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={headerImg} className="header-img" alt="Header Logo" />
      </div>
    </header>
  );
}

export default Header;

