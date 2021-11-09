import React from 'react';

import "./home.css";

import Carousel from "../../components/Carousel/Carousel";
import { CarouselData } from "../../components/Carousel/CarouselData";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import Navbar from "../../components/Navbar/Navbar"

function Home() {
  const cards = [
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back",
    },
  ];

  return (
    <div className="conteiner-home">
      <section>
        <p> Não vacile, Trilhas em andamento </p>

        <Carousel slides={CarouselData} uniqueSlide={CarouselData} />
      </section>

      <section>
        <p> Não vacile, Trilhas em andamento </p>

        <div className="container">
          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
      <p> Para prosperar, Recomendados para você </p>
      </section>

      <section>
      <p>
        Você vai transformar o mundo ao seu redor, Descubra novos conteúdos.
      </p>
      </section>

      <Navbar />
    </div>
  );
}

export default Home;
