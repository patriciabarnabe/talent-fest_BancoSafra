import React, { useState, useEffect, useRef } from 'react';
// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '../../services/firebase'

// import Card from '../Card/Card';
import FlipCard from "../../components/FlipCard/FlipCard.js";

import './carousel.css'

const Carousel = ({docArticle, cardClicked}) => {
  
  const cards = docArticle
  console.log(cards)

  // const [document, setDocument] = useState([])
  // //const articlesCollectionRef = collection(db, 'trilha')

  // setDocument([...cards])

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const data = await getDocs(articlesCollectionRef);
  //     setArticles(data.docs.map((article) => ({ ...article.data(), id: article.id })))
  //   }

  //   getArticles()
  //   console.log()

  // }, [])

  //   useEffect(() => {
  //   console.log(document)
  // }, [document])

  function clicou() {
    console.log('clicou')
  }

 
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <section className='container-carousel '>
      <i className="fas fa-chevron-left" alt='Scroll left'
        onClick={handleLeftClick}
      />
      <div className='carousel' ref={carousel}>
        {cards != [] && cards?.map((card, index) => {
          return (
            <FlipCard key={index} trilha={card} 
            onClick={cardClicked}
            />
          )
        })}
      </div>
      <i className="fas fa-chevron-right" alt='Scroll right'
        onClick={handleRightClick}
      />
    </section>

  )
}

export default Carousel;


