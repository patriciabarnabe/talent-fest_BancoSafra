import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from '../src/routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';



ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />  
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);




