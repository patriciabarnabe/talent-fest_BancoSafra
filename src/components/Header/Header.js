import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo-branca.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo Banco Safra" />
        </Link>
        <p> Menina de Vila </p>
      </header>

      
    </>
  );
};

export default Header;
