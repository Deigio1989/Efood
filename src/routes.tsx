import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurantes/:id" element={<Restaurants />}></Route>
  </Routes>
)

export default Rotas
