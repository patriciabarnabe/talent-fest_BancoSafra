import React from "react";

import "./home.css";

import Carousel from "../../components/Carousel/Carousel";
import { CarouselData } from "../../components/Carousel/CarouselData";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import Navbar from "../../components/Navbar/Navbar"

import { ProgressBar } from "react-bootstrap";

function Home() {
  const percentage = 73;

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
              <FlipCard />
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

        <ProgressBar
          now={percentage}
          label={`${percentage}% `}
          className="m-5"
        />

        <section>
        <p>
          Você vai transformar o mundo ao seu redor, Descubra novos conteúdos.
        </p>
      </section>
      <Navbar />
    </div >
  );
}

export default Home;
