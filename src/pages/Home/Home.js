import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'
//import { collection, doc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import Header from "../../components/Header/Header.js";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { CarouselData } from "../../components/Carousel/CarouselData";
// import FlipCard from "../../components/FlipCard/FlipCard";
import { ProgressBar } from "react-bootstrap";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar"
import Card from '../../components/Card/Card'

function Home() {
  const percentage = 73;

  // const [articles, setArticles] = useState([])
  // const articlesCollectionRef = collection(db, 'trilha')

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const data = await getDocs(articlesCollectionRef);
  //     setArticles(data.docs.map((article) => ({ ...article.data(), id: article.id })))
  //   }

  //   getArticles()
  //   console.log(articles)

  // }, [])

  // useEffect(() => {
  //   console.log(articles)
  // }, [articles])

  function clicou() {
    console.log('clicou')
  }

  return (
    <>
    <Header />
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
          <Carousel/>

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
    </>
  );
}

export default Home;

/*{trilha && trilha.map((article) => {
  return (
    <Carousel
      onClick={clicou}
    >
      <Card article={article}/>
    </Carousel>
  )
})}*/

// const q = query(collection(db, "trilha"), where("titulo", "==", true));

//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });