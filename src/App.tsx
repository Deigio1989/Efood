import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import HeaderHome from './components/HeaderHome'
import RestaurantList from './components/RestaurantList'
import Home from './pages/Home'
import Footer from './components/Footer'
import Restaurants from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurantes" element={<Restaurants />}></Route>
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
