import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import facebook from '../../assets/images/Vector.png'
import { FooterBanner, Social } from './styles'

export default function Footer() {
  return (
    <>
      <FooterBanner>
        <img className="logo" src={logo} alt="logo" />
        <div>
          <Social>
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </Social>
        </div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br />
          dos produtos é toda do estabelecimento contratado.{' '}
        </p>
      </FooterBanner>
    </>
  )
}
