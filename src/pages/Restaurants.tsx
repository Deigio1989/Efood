import HeaderRestaurant from '../components/HeaderRestaurant'

import DishesList from '../components/DishesList'

import { useParams } from 'react-router-dom'
import Cart from '../components/Cart'
import { useGetRestaurantQuery } from '../services/api'
import Loader from '../components/Loader'

type RestaurantParams = {
  id: string
}

export default function Restaurants() {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant, isLoading } = useGetRestaurantQuery(id)

  if (isLoading) {
    return <Loader />
  }
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
