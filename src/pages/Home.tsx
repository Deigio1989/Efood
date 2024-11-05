import HeaderHome from '../components/HeaderHome'
import RestaurantList from '../components/RestaurantList'
import { useGetRestaurantesQuery } from '../services/api'

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
  const { data: restaurants } = useGetRestaurantesQuery()

  if (restaurants) {
    return (
      <>
        <HeaderHome />
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }
  return <h1>Carregando</h1>
}
