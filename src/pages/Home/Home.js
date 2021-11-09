import "./home.css";

import Carousel from "../../components/Carousel/Carousel";
import { CarouselData } from "../../components/Carousel/CarouselData";
import "bootstrap/dist/css/bootstrap.min.css";
import FlipCard from "../../components/FlipCard/FlipCard";

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
    <>
      <header className="header-container">
        <img src="" alt="" />
        <div>
          <h1> Olá, Maria!</h1>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </header>

      <div>
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

        <p> Para prosperar, Recomendados para você </p>

        <Carousel slides={CarouselData} />

        <p>
          Você vai transformar o mundo ao seu redor, Descubra novos conteúdos.
        </p>
      </div>
    </>
  );
}

export default Home;
