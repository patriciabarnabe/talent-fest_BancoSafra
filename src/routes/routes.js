import React from 'react';

import {
  Routes,
  Route  
} from 'react-router-dom';
import Article from '../pages/Article/Article';
import Home from '../pages/Home/Home'
import Contents from '../pages/Contents/Contents'
import NotFound from '../pages/Notfound/Notfound'
import Login from '../pages/Login/Login';

export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/contents' element={<Contents />} />
      <Route path='/article' element={<Article />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}