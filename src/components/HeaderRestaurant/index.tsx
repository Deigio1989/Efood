import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom'
import { HeaderNav, Imagem, Info, RestaurantHeader, Title } from './styles'
import { RestaurantType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantType
}

export default function HeaderRestaurant({ restaurant }: Props) {
  return (
    <>
      <RestaurantHeader style={{ backgroundImage: `url(${fundo})` }}>
        <HeaderNav className="container">
          <Link className="link" to="/">
            Restaurantes
          </Link>

          <p>0 produtos no carrinho</p>
        </HeaderNav>
        <img src={logo} alt="logo" />
      </RestaurantHeader>
      <Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="filter">
          <div className="container">
            <Info>Italiana</Info>
            <Title>{restaurant.titulo}</Title>
          </div>
        </div>
      </Imagem>
    </>
  )
}
