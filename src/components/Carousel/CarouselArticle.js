import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import CardArticle from '../Card/CardArticle';
import './carousel.css'

const CarouselArticle = ({arrayConteudoSlides,trilha,onClick}) => {
  console.log(arrayConteudoSlides, '>>')
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
  const article = trilha;
  console.log(article,'clicou')
  return (
    <section className='container-carousel-article'>
      <i className="fas fa-chevron-left" alt='Scroll left'
        onClick={handleLeftClick}
      />
      <div className='carousel' ref={carousel}>
          {arrayConteudoSlides.conteudo.map((item) => 
            <CardArticle article={item} onClick={() => onClick(article.id)}/> 
          )}    
      </div>
      <i className="fas fa-chevron-right" alt='Scroll right'
        onClick={handleRightClick}
      />
    </section>

  )
 
}

export default CarouselArticle;
