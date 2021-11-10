import React from "react";
import { Link } from 'react-router-dom';

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { CarouselData } from "../../components/Carousel/CarouselData";
// import FlipCard from "../../components/FlipCard/FlipCard";
import { ProgressBar } from "react-bootstrap";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar"

function Home() {
  const percentage = 73;

  function clicou() {
    console.log('clicou')
  }

  return (
    <div className="conteiner-home">
      <section className='home-profile'>
        <img className='image-user-home'
          src='https://cdn.icon-icons.com/icons2/1560/PNG/512/3430602-avatar-female-pretty-profile-user-woman_107555.png'
        />
        <div className='home-userInfo'>
          <h2 className='home-userName'>Olá, {null}</h2>

          <ProgressBar
            now={percentage}
            label={`${percentage}% `}
            className="m-5"
          />
        </div>
      </section>

      <div className='home-content'>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Não vacile, há  <Link className='link-contents' to="/contents">Thilhas para concluir!</Link></h2>
          <Carousel
            onClick={clicou}
          />

        </section>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Vamos juntas concluir as  <Link className='link-contents' to="/contents">Leituras em Andamento...</Link></h2>
          <Carousel
          />

        </section>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Para prosperar, <Link className='link-contents' to="/contents">Recomendados para você ;)</Link></h2>
          <Carousel
          />

        </section>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Você vai transformar o mundo, então  <Link className='link-contents' to="/contents">Descubra novos conteúdos!</Link></h2>
          <Carousel
          />

        </section>
      </div>
      <Navbar />
    </div >
  );
}

export default Home;
