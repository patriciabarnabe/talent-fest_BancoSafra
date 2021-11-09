import React from 'react';
import { useState, useEffect} from "react";
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../services/firebase.js';
// import Carousel from '../../components/Carousel/Carousel.js';
// import UniqueCarouselArticle from '../../components/Carousel/UniqueCarouselArticle.js';
import Navbar from "../../components/Navbar/Navbar"

const Article = () => {
    const [trilha, setTrilha] = useState([])
    
    useEffect(() => {
        const trilhas = collection(db, 'trilha');
        const esperandoGetDocs = getDocs(trilhas)
        esperandoGetDocs.then((collectionTrilha) => {
             const newArray = [];
            collectionTrilha.forEach((doc) => {

                console.log(doc); 
                 const obj = {
                    Titulo: doc.data().Titulo,
                    Autora: doc.data().Autora,
                    conteudo: doc.data().conteudo,
                    imagem: doc.data().imagem
                };
                newArray.push(obj);
            });
            console.log(newArray);
            setTrilha(newArray);
             
        })
    }, [])
    
    return (
        
        <div>
            <h1>Oi</h1>

        {/* <Carousel
           slides = {<UniqueCarouselArticle stateCollection={trilha} slide={trilha.conteudo} />} 
           uniqueSlide={trilha}
        /> */}
            { trilha && trilha.map((article, index) => {
                console.log(article.imagem)
                return (
                    <div key={index}>
                        <div>
                            <div>{article.Titulo}</div>
                            <div>{article.Autora}</div>
                            <section>
                                {article.conteudo[0] }
                            </section>
                        </div>
                    </div> 
                )
            })}        
            <Navbar />            
        </div>
    )
}
export default Article;
