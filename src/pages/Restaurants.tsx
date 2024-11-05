import HeaderRestaurant from '../components/HeaderRestaurant'

import DishesList from '../components/DishesList'

import { useParams } from 'react-router-dom'
import Cart from '../components/Cart'
import { useGetRestaurantQuery } from '../services/api'

export default function Restaurants() {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  return (
    <>
      {restaurant ? (
        <>
          <HeaderRestaurant restaurant={restaurant} />
          <DishesList restaurant={restaurant} />
          <Cart />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  )
}
