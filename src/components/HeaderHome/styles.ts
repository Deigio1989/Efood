import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Banner = styled.header`
  text-align: center;
  height: 360px;
  img {
    margin-top: 32px;
  }
  margin-top: 0;
  @media (max-width: ${breakpoints.desktop}) {
    height: 280px;
  }
`
export const Slogan = styled.h2`
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 40px;
  }
`
