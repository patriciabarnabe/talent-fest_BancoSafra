import { useState } from "react";
import React from "react";

import "./flipcard.css";

import cn from "classnames";
import imgEstudar from '../../assets/estudar-2.jpg'

function FlipCard({trilha, onClick}) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }
  const article = trilha;
  return (
    <div className="flip-card-outer" onClick={handleClick}>
    {/* {() => onClick(article.id)} */}
      <div className={cn("flip-card-inner", { showBack })}>
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <section className="info-card">
            <img className="image-card" src={article.imagem} alt='img'/>
              <h2 className="title-card">{article.titulo}</h2>
              <div className="icons-card">
                {/* <i className="far fa-bookmark"></i>
                <i className="far fa-heart">
                  <span className="number-likes">{article.likes}</span>
                </i> */}
              </div>
            </section>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <h2 className="text-card">{article.autora}</h2>
            <p className="text-card">{article.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
