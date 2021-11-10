import React from 'react';
import { useState, useEffect} from "react";
import { onSnapshot, getDoc, doc, updateDoc} from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/button.js';
import CarouselArticle from "../../components/Carousel/CarouselArticle";

const Article = () => {
    const [trilha, setTrilha] = useState([])
    
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
            setTrilha(newArray)
        })     
    }, [])
    
    
    const likeArticle = async () => {
        const trilhas = doc(db, "trilha", "1");
        const esperandoGetDocs = getDoc(trilhas)  
        esperandoGetDocs.then((docTrilha) => {   
            const obj = {
                likes: docTrilha.data().likes
            };
            const addLike = obj.likes +=1
            console.log(addLike)
            updateDoc(trilhas, {
            likes: addLike
            });
        return addLike
        })
    }
    
    
    
    return (
        
        <div>
            <Header />

            <h1>Oi</h1>
        
             { trilha && trilha.map((article, index) => {
                 console.log(article)
                return (
                    <div key={index}>
                        <div>
                            <div>{article.titulo}</div>
                            <div>{article.autora}</div>
                            <CarouselArticle arrayConteudoSlides={article} />
                        </div>
                        {/* <Button  children='likes' onClick={() => likeArticle()}/> */}
                        <div className='icons-card'>
                            <button onClick={() => likeArticle()}><i className="far fa-bookmark"></i></button>
                            <i className="far fa-heart"><span className="number-likes">{article.likes}</span></i>
                        </div>
                        
                    </div> 
                )
            })}    
            
                
            <Navbar />            
        </div>
    )
}

export default Article;