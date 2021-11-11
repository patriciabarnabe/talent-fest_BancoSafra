import React, {useEffect, useState}from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import Header from "../../components/Header/Header";
import ResponsiveAlert from "./../../components/ResponsiveAlert/ResponsiveAlert";

import { Link } from "react-router-dom";

import "./contents.css";

function Contents() {

  const [articles, setArticles] = useState([])
  const articlesCollectionRef = collection(db, 'trilha')

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((article) => ({ ...article.data(), id: article.id })))
    }
    getArticles()  
  }, [])
  return (
    <>
      <ResponsiveAlert />
      <Header />

      <div className="button-container">
        <Link to="/contents">
          <button type="button" className="button-article">
            Artigos
          </button>
        </Link>

        <Link to="/">
          <button type="button" className="button-about">
            Sobre
          </button>
        </Link>
      </div>

      <h1>Não vacile, trilhas em andamento</h1>

      {
        articles.map((item, index)=>{
          return(
          <Link to={"/article/"+index}>{item.titulo}</Link>)
        })
      }

    </>
  );
}

export default Contents;
