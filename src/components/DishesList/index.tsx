import DishClass from '../../models/Dish'
import Dish from './Dish'
import { DishList } from './styles'

type Props = {
  dishes: DishClass[]
}

export default function DishesList({ dishes }: Props) {
  return (
    <DishList className="container">
      {dishes.map((dish) => (
        <Dish
          key={dish.title}
          title={dish.title}
          img={dish.image}
          imgAlt={dish.imgAlt}
          description={dish.description}
        ></Dish>
      ))}
    </DishList>
  )
}
