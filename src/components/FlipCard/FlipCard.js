import { useState } from "react";
import React from "react";

import "./flipcard.css";

import cn from "classnames";

function FlipCard() {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div className={cn("flip-card-inner", { showBack })}>
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold"> Front </p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold"> Back </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
