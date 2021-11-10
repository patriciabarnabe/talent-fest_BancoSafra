import React from "react";
import { useState} from "react";

import Header from "../../components/Header/Header";
import { ProgressBar } from "react-bootstrap";
// import Navbar from '../../components/Navbar/Navbar'

import photo from "./../../assets/foto-perfil.png";
import stars from "./../../assets/stars.png";

import "./profile.css";

const Profile = () => {
  const [showSaveBtn, setShowSaveBtn] = useState('none')
  const [enableEditBtn, setEnableEditBtn] = useState(true)
  const [name, setName] = useState(localStorage.getItem('name'))
  const [local, setLocal] = useState(localStorage.getItem('local'))
  const [dream, setDream] = useState(localStorage.getItem('dream'))

  function enableEdit() {
    setShowSaveBtn('flex')
    setEnableEditBtn(false)
  }

  function saveChanges() {
    setShowSaveBtn('none')
    setEnableEditBtn(true)
    localStorage.setItem('name', name);
    localStorage.setItem('local', local);
    localStorage.setItem('dream', dream);

    setName(localStorage.getItem('name'))
  }


  const percentage = 73;

  return (
    <>
      <Header />

      <div className="card-profile">
        <div className="img-container">
          <img src={photo} alt="Imagem de perfil" className="profile-photo" />
          <img src={stars} alt="Imagem de estrelas" className="profile-stars" />
        </div>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="input-profile"
            disabled={enableEditBtn}
            onChange={e=>{setName(e.target.value)}}
            value={ name }
          />
  
          <input
            type="text"
            name="local"
            placeholder="Localidade"
            className="input-profile"
            disabled={enableEditBtn}
            onChange={e=>{setLocal(e.target.value)}}
            value={ local }
          />
          <input
            type="text"
            name="dream"
            placeholder="Sonho"
            className="input-profile"
            disabled={enableEditBtn}
            onChange={e=>{setDream(e.target.value)}}
            value={ dream }
          />
        </form>

        <section class="profile-buttons">
          <button class="btn-edit" onClick={enableEdit}> <i class="far fa-edit"></i> </button>
          <button class="btn-save" onClick={saveChanges} style={{ display: `${showSaveBtn}` }}> <i class="fas fa-check"></i> </button>
        </section>

        <ProgressBar
          now={percentage}
          label={`${percentage}% `}
          className="m-3"
        />
      </div>

      <div className="contents-profile">
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
