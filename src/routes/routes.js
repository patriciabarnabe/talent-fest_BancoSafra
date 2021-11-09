import {
  Routes,
  Route  
} from "react-router-dom";
import Article from "../pages/Article/Article";
import Home from '../pages/Home/Home'
import PageNotFound from '../pages/Notfound/Notfound'

export const Rotas = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/article' element={<Article />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}