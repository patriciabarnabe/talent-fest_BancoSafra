import React, { useRef} from 'react';

import Card from '../Card/Card';

import './carousel.css'

const Carousel = () => {

  const cards = ["1", "2", '3', '4', "5", '6', '7', '8', '9']
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
    <section className='container-carousel'>
      <i className="fas fa-chevron-left" alt='Scroll left'
      onClick={handleLeftClick}
      />

      <div className='carousel' ref={carousel}>

        {cards.map((card, index) => {
          return (
            <Card key={index} />
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
