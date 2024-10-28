import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBanner = styled.footer`
  background-color: ${cores.bege2};
  text-align: center;
  padding-bottom: 40px;
  div {
    display: block;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    color: ${cores.rosa};
    margin-top: 80px;
  }
  .logo {
    margin-top: 40px;
    margin-bottom: 32px;
  }
`
export const Social = styled.div`
  display: flex;
  img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }
`