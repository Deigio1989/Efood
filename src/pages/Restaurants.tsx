import HeaderRestaurant from '../components/HeaderRestaurant'

import DishesList from '../components/DishesList'
import { useEffect, useState } from 'react'
import { RestaurantType } from './Home'
import { useParams } from 'react-router-dom'

export default function Restaurants() {
  const [restaurant, setRestaurants] = useState<RestaurantType>()
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })

  return (
    <>
      {restaurant ? (
        <>
          <HeaderRestaurant restaurant={restaurant} />
          <DishesList restaurant={restaurant} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  )
}
