import prato1 from '../assets/images/image1.png'
import prato2 from '../assets/images/imagem.png'

import HeaderHome from '../components/HeaderHome'
import RestaurantList from '../components/RestaurantList'
import RestaurantClass from '../models/Restaurant'

const restaurants: RestaurantClass[] = [
  {
    title: 'Hioki Sushi',
    tag: ['Destaque da semana', 'Japonesa'],
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.\nExperimente o Japão sem sair do lar com nosso delivery!',
    image: prato2,
    id: 1,
    imgAlt: 'Sushis'
  },
  {
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato1,
    id: 2,
    imgAlt: 'Italiana'
  },
  {
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato1,
    id: 3,
    imgAlt: 'Italiana'
  },
  {
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato1,
    id: 4,
    imgAlt: 'Italiana'
  },
  {
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato1,
    id: 5,
    imgAlt: 'Italiana'
  },
  {
    title: 'La Dolce Vita Trattoria',
    tag: ['Italiana'],
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato1,
    id: 6,
    imgAlt: 'Italiana'
  }
]

export default function Home() {
  return (
    <>
      <HeaderHome />
      <RestaurantList restaurant={restaurants} />
    </>
  )
}
