import React from "react";
import goback from "./../../assets/seta-rosa.png";
import { Link } from "react-router-dom";
import ResponsiveAlert from "./../../components/ResponsiveAlert/ResponsiveAlert";

import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <ResponsiveAlert />
      <div className="outer-wrapper">
        <div className="inner">
          <div className="four-wrapper">
            <div className="leg-1"></div>
            <div className="leg-2"></div>
            <div className="leg-3"></div>
          </div>

          <div className="zero-wrapper">
            <div className="zero-wrapper__middle"></div>
          </div>

          <div className="four-wrapper2">
            <div className="leg-12"></div>
            <div className="leg-22"></div>
            <div className="leg-32"></div>
          </div>
        </div>

        <h1>Caminho errado, mana!</h1>

        <Link to="/home">
          <img src={goback} alt="Seta de voltar" />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
