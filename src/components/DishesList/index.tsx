import { RestaurantType } from '../../pages/Home'
import { formatDescription } from '../RestaurantList'
import Dish from './Dish'
import { DishList } from './styles'

type Props = {
  restaurant: RestaurantType
}

export default function DishesList({ restaurant }: Props) {
  const cardapio = restaurant.cardapio
  return (
    <DishList className="container">
      {cardapio.map((dish) => (
        <Dish
          key={dish.nome}
          title={dish.nome}
          img={dish.foto}
          imgAlt={dish.nome}
          description={formatDescription(dish.descricao, 150) + '...'}
        ></Dish>
      ))}
    </DishList>
  )
}
