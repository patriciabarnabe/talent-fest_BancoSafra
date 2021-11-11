import React from "react";
import logo from "./../../assets/logo-g-menina-de-vila.png";

const ResponsiveAlert = () => {
  return (
    <div className="responsive">
      <img src={logo} alt="Logo Banco Safra" />
      <h1>
        Por enquanto, nossa plataforma está disponível apenas para tamanho{" "}
        <span className="responsive-span">375x626</span> de tela. Acesse a
        dimensão adequada para conhecer a{" "}
        <span className="responsive-span">Menina de Vila - Banco Safra</span> .
      </h1>
    </div>
  );
};

export default ResponsiveAlert;
