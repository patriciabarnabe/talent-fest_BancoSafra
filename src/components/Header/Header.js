import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo-g-menina-da-vila.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo Banco Safra" />
        </Link>
      </header>    
    </>
  );
};

export default Header;
