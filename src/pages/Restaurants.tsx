import HeaderRestaurant from '../components/HeaderRestaurant'
import RestaurantClass from '../models/Restaurant'
import prato1 from '../assets/images/image1.png'
import pizza from '../assets/images/image3.png'

import DishesList from '../components/DishesList'
import DishClass from '../models/Dish'

const restaurant: RestaurantClass = {
  title: 'La Dolce Vita Trattoria',
  tag: ['Italiana'],
  rating: '4.6',
  description:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  image: prato1,
  id: 2,
  imgAlt: 'Italiana'
}

const dishList: DishClass[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 1,
    imgAlt: 'Pizza Marguerita'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 2,
    imgAlt: 'Pizza Marguerita'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 3,
    imgAlt: 'Pizza Marguerita'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 4,
    imgAlt: 'Pizza Marguerita'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 5,
    imgAlt: 'Pizza Marguerita'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 6,
    imgAlt: 'Pizza Marguerita'
  }
]

export default function Restaurants() {
  return (
    <>
      <HeaderRestaurant restaurant={restaurant} />
      <DishesList dishes={dishList} />
    </>
  )
}
