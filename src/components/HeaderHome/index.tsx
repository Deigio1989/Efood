import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Banner, Slogan } from './styles'

export default function HeaderHome() {
  return (
    <Banner style={{ backgroundImage: `url(${fundo})` }}>
      <img src={logo} alt="logo" />
      <Slogan>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Slogan>
    </Banner>
  )
}
