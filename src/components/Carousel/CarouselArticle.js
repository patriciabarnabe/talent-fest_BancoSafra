import React, { useRef } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../services/firebase";
import CardArticle from "../Card/CardArticle";
import "./carousel.css";
import Notification from "../Notificaton/notification";

const CarouselArticle = ({ arrayConteudoSlides }) => {
  console.log(arrayConteudoSlides, ">>");
  const carousel = useRef(null);
  

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <section className="container-carousel-article">
        <i
          className="fas fa-chevron-left"
          alt="Scroll left"
          onClick={handleLeftClick}
        />
        <div className="carousel" ref={carousel}>
          {arrayConteudoSlides.conteudo.map((item, index) => (
            <div key={index}>
              <CardArticle article={item} />
              <p>
                
              </p>
            </div>
          ))}
          {[arrayConteudoSlides.length - 1]
                  ? <button className="class-button"> Finalizar </button>
                  : ""}
        </div>
        <Notification type="sucess" conteudo="Parabéns! Você completou a trilha."/>
        <i
          className="fas fa-chevron-right"
          alt="Scroll right"
          onClick={handleRightClick}
        />
      </section>
    </>
  );
};

export default CarouselArticle;
