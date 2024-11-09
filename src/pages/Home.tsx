import HeaderHome from '../components/HeaderHome'
import RestaurantList from '../components/RestaurantList'
import { useGetRestaurantesQuery } from '../services/api'

export default function Home() {
  const { data: restaurants, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <HeaderHome />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
    </>
  )
}
