import Dish from './Dish'
import { DishList } from './styles'

type Props = {
  restaurant: RestaurantType
}

export default function DishesList({ restaurant }: Props) {
  const cardapio = restaurant.cardapio

  return (
    <>
      <DishList className="container">
        {cardapio.map((dish) => (
          <Dish key={dish.nome} cardapio={dish}></Dish>
        ))}
      </DishList>
    </>
  )
}
