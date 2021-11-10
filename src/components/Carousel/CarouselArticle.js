import React, { useState, useEffect, useRef } from 'react';
import { onSnapshot, getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase'
import CardArticle from '../Card/CardArticle';
import './carousel.css'

 const CarouselArticle = () => {
  const [articles, setArticles] = useState([])
  
    useEffect(() => {
      onSnapshot(doc(db, 'trilha', "1"), (doc) => { 
            const newArray = []; 
                 const obj = {
                    titulo: doc.data().titulo,
                    autora: doc.data().autora,
                    conteudo: doc.data().conteudo,
                    imagem: doc.data().imagem,
                    likes: doc.data().likes,
                };
                newArray.push(obj);
          
            console.log(newArray);
            setArticles(newArray)
            console.log(articles)
        })     
    }, [])
 

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
            <CardArticle key={index} article={card} />
          )
        })}
      </div>
      <i className="fas fa-chevron-right" alt='Scroll right'
        onClick={handleRightClick}
      />
    </section>

  )
 
}

export default CarouselArticle;
// export default CarouselArticle;
//    const showCardArticle = () => {
//     for (item of stateCollection){
//       item
//     } 
//   }
//   return (
//     <> 
//       <section>
//         { stateCollection && stateCollection.map((item) => (
//           <div  key={item.id}>
//             <article>
//               <ul className="title-article">
//                 <li>{item.title}</li>
//               </ul>
//               <img>{item.image}</img>
//               <ul className="slides">
//                 <li>{showCardArticle}</li>
//               </ul>
//             </article>
//           </div>
//         ))}
//       </section>

//     </>
  // )