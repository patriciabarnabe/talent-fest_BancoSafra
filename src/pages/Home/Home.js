import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import Header from "../../components/Header/Header.js";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ResponsiveAlert from "./../../components/ResponsiveAlert/ResponsiveAlert";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar"
import profile from '../../assets/foto-perfil.png'
import stars from "./../../assets/stars.png";

function Home() {
  const percentage = 73;

  const [articles, setArticles] = useState([])
  const articlesCollectionRef = collection(db, 'trilha')

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((article) => ({ ...article.data(), id: article.id })))
    }
    getArticles()  
  }, [])

  function clicou(e) {
    console.log('clicou', e)
  }

  return (
    <>
    <ResponsiveAlert />
    <Header />
    <div className="conteiner-home">
      <section className='home-profile'>
        <img className='image-user-home'
          src={profile}
          alt="user-home"
        />
        <div className='home-userInfo'>
          <h2 className='home-userName'>Olá, Maria!</h2>
          <img src={stars} alt="Imagem de estrelas" className="profile-stars" />
        </div>
      </section>

      <div className='home-content'>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Não vacile, há  Thilhas para concluir!</h2>
          {articles != [] && <Carousel docArticle={articles} 
          cardClicked={clicou}
          />}


        </section>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Vamos juntas concluir as  Leituras em Andamento...</h2>
          {articles != [] && <Carousel docArticle={articles} 
          cardClicked={clicou}
          />}

        </section>
        <section className='section-carousel'>
          <h2 className='title-sugestion-home'> Para prosperar, Recomendados para você ;)</h2>
          {articles != [] && <Carousel docArticle={articles} 
          cardClicked={clicou}
          />}

        </section>
        <section className='section-carousel-home'>
          <h2 className='title-sugestion-home'> Você vai transformar o mundo, então  Descubra novos conteúdos!</h2>
          {articles != [] && <Carousel docArticle={articles} 
          cardClicked={clicou}
          />}

        </section>
      </div>
    </div >
    <Navbar />
  </>
  );
}

export default Home;
