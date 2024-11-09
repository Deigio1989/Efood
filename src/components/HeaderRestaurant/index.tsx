import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom'
import {
  CartLink,
  HeaderNav,
  Image,
  Info,
  RestaurantHeader,
  Title
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

type Props = {
  restaurant: RestaurantType
}

export default function HeaderRestaurant({ restaurant }: Props) {
  const dispatch = useDispatch()
  function openCart() {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <>
      <RestaurantHeader style={{ backgroundImage: `url(${fundo})` }}>
        <HeaderNav className="container">
          <Link className="link" to="/">
            Restaurantes
          </Link>

          <CartLink onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartLink>
        </HeaderNav>
        <Link className="link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </RestaurantHeader>
      <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="filter">
          <div className="container">
            <Info>Italiana</Info>
            <Title>{restaurant.titulo}</Title>
          </div>
        </div>
      </Image>
    </>
  )
}
