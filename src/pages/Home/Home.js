import React from "react";

import "./home.css";

import Carousel from "../../components/Carousel/Carousel";
import { CarouselData } from "../../components/Carousel/CarouselData";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import Navbar from "../../components/Navbar/Navbar"
//import Card from '../../components/Card/Card'

import { ProgressBar } from "react-bootstrap";

function Home() {
  const percentage = 73;

  function clicou() {
    console.log('clicou')
  }

  return (
    <div className="conteiner-home">
      <section className='home-profile' onClick={clicou}>
        <img className='image-user-home' 
        src='https://cdn.icon-icons.com/icons2/1560/PNG/512/3430602-avatar-female-pretty-profile-user-woman_107555.png' 
         />
        <div class='home-userInfo'>
          <h2 class='home-userName'>Olá, {null}</h2>

          <ProgressBar
            now={percentage}
            label={`${percentage}% `}
            className="m-5"
          />
        </div>

      </section>

      <div className='home-content'>

        
        <section>
          <h2> Não vacile, há Trilhas em andamento </h2>

          <Carousel slides={CarouselData} uniqueSlide={CarouselData} 
          onClick={clicou}
          />

        </section>
        <section>
          <h2> Vamos juntas concluir as Leituras em andamento </h2>

          <Carousel slides={CarouselData} uniqueSlide={CarouselData} />

        </section>
        <section>
          <h2> Para prosperar, Recomendados para você </h2>

          <Carousel slides={CarouselData} uniqueSlide={CarouselData} />

        </section>
        <section>
          <h2> Você vai transformar o mundo, então Descubra novos conteúdos </h2>

          <Carousel slides={CarouselData} uniqueSlide={CarouselData} />

        </section>
        <section>

          <div className="container">
            <div className="row h-100">
              <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
                <FlipCard />
              </div>
            </div>
          </div>

        </section>
      </div>

      <Navbar />
    </div >
  );
}

export default Home;
