import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from '../src/routes/routes'

ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />  
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


