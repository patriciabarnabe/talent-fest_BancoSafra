import react from 'react';
import './home.scss'
import Carousel from '../../components/Carousel/Carousel';
import { CarouselData } from '../../components/Carousel/CarouselData';

function Home() {
    return (
      <>
        <header className="header-container">
            <img src="" alt=""/>
            <div>
              <h1> Olá, Maria!</h1>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
        </header>

        <div>
          <p> Não vacile, Trilhas em andamento </p>
          
            <Carousel 
            slides={CarouselData}
            uniqueSlide={CarouselData}
            />

          <p> Para prosperar, Recomendados para você </p>

            <Carousel 
            slides={CarouselData}
            uniqueSlide={CarouselData}
            />
            
          <p> Você vai transformar o mundo ao seu redor, Descubra novos conteúdos </p>
        </div>
      </>
    );
  }
  
  export default Home;
