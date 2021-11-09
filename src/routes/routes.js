import {
  Routes,
  Route  
} from "react-router-dom";

import Home from '../pages/Home/Home'
import PageNotFound from '../pages/Notfound/Notfound'
import Contents from '../pages/Contents/Contents'


export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/contents' element={<Contents />} />
    </Routes>
  )
}