import React from 'react';
import goback from './../../assets/seta-voltar.png'
import { Link } from 'react-router-dom';

import './notFound.css';

const NotFound = () => {
  return (
    <div class='outer-wrapper'>
      <div class='inner'>
        <div class='four-wrapper'>
          <div class='leg-1'></div>
          <div class='leg-2'></div>
          <div class='leg-3'></div>
        </div>

        <div class='zero-wrapper'>
          <div class='zero-wrapper__middle'></div>
        </div>

        <div class='four-wrapper2'>
          <div class='leg-12'></div>
          <div class='leg-22'></div>
          <div class='leg-32'></div>
        </div>
      </div>

      <h1>Caminho errado, mana!</h1>

      <Link to='/home'>
        <img src={goback} alt='Seta de voltar'/>
      </Link>  

    </div>
  );
};

export default NotFound;
