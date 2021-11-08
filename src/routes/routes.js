import {
  Routes,
  Route  
} from "react-router-dom";

import Home from '../pages/Home/Home'
import PageNotFound from '../pages/Notfound/Notfound'

export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}