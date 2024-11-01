import { useEffect, useState } from 'react'
import prato1 from '../assets/images/image1.png'
import prato2 from '../assets/images/imagem.png'

import HeaderHome from '../components/HeaderHome'
import RestaurantList from '../components/RestaurantList'

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export default function Home() {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })
  return (
    <>
      <HeaderHome />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
