import React from "react";

import Header from "../../components/Header/Header";
import { ProgressBar } from "react-bootstrap";
// import Navbar from '../../components/Navbar/Navbar'

import photo from "./../../assets/foto-perfil.png";
import stars from "./../../assets/stars.png";

import "./profile.css";

const Profile = () => {
  const percentage = 73;

  return (
    <>
      <Header />

      <div className="card-profile">
        <img src={photo} alt="Imagem de perfil" className="profile-photo" />
        <p> Maria Safra </p>
        <img src={stars} alt="Imagem de estrelas" className="profile-stars" />
        <p> São Paulo </p>
        <p> “Fazer um mundo melhor através de pessoas melhores’’ </p>

        <ProgressBar
          now={percentage}
          label={`${percentage}% `}
          className="m-3"
        />
      </div>

      <div className='contents-profile'>
        <div className="favorites-container">
          <p> Favoritos </p>
        </div>

        <div className="read-container">
          <p> Leituras check ✔ </p>
        </div>
      </div>

      {/* <Navbar /> */}
    </>
  );
};

export default Profile;
