import React, { useRef, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../services/firebase";
import CardArticle from "../Card/CardArticle";
import "./carousel.css";
import Notification from "../Notificaton/notification";

const CarouselArticle = ({ arrayConteudoSlides }) => {
  console.log(arrayConteudoSlides, ">>");
  const carousel = useRef(null);
  const [open, setOpen]= useState(false)
  const [buttonState, setButtonState] = useState(true);
  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const hideAlert = () => {
    setTimeout(() => setOpen(false), 5000)
    setButtonState(false)
  } 
  const logicaButton = (arr) => {
    if (buttonState){
      return [arr.length - 1]
        ?<button className="class-button button-finish-article" onClick={() => {setOpen(true); hideAlert();}}> Finalizar </button>
        : "";
    }
  } 

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
        
        {logicaButton(arrayConteudoSlides)}
    
        </div>
        
        {open && < Notification type="success" conteudo="Parabéns! Você completou a trilha."/>}
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
