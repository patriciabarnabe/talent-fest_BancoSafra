import React from "react";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import { Link } from "react-router-dom";

import "./contents.css";

function Contents() {
  return (
    <>
      <Header />

      <div className="button-container">
        <Link to="/article">
          <button type="button" className="button-article">
            Artigos
          </button>
        </Link>

        <Link to="/about">
          <button type="button" className="button-about">
            Sobre
          </button>
        </Link>
      </div>

      <h1>Não vacile, trilhas em andamento</h1>

      <Card />

      <article>
        <p>imagem</p>
        <Card />
        <p>Titulo - Por onde começar: Estudar e estudar </p>
        <p>
          Descrição: Sim, não tem segredo, tudo na nossa vida vai exigir
          esforços e estudar é aquela famosa receita para o sucesso
        </p>
      </article>
    </>
  );
}

export default Contents;
