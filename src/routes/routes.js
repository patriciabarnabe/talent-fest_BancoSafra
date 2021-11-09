import {
  Routes,
  Route  
} from "react-router-dom";

import Home from '../pages/Home/Home'
import PageNotFound from '../pages/Notfound/Notfound'
import Login from "../pages/Login/Login";

export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}