import React, {  useRef } from 'react';

import FlipCard from "../../components/FlipCard/FlipCard.js";

import './carousel.css'

const Carousel = ({docArticle, cardClicked}) => {
  
  const cards = docArticle

  function clicou() {
    console.log('clicou')
  }
 
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
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
        {cards != [] && cards?.map((card) => {
          return (
            <FlipCard key={card.id} trilha={card} 
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


