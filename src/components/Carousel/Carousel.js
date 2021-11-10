import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import Card from '../Card/Card';

import './carousel.css'

const Carousel = () => {

  const [articles, setArticles] = useState([])
  const articlesCollectionRef = collection(db, 'trilha')

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((article) => ({ ...article.data(), id: article.id })))
    }

    getArticles()
    console.log(articles)

  }, [])

    useEffect(() => {
    console.log(articles)
  }, [articles])

 
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
        {articles?.map((card, index) => {
          return (
            <Card key={index} article={card} />
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


