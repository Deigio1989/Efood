import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantHeader = styled.header`
  position: relative;
  align-items: center;
  height: 180px;
  text-align: center;
  img {
    margin-top: -50px;
  }
`
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
  .link {
    text-decoration: none;
    color: ${colors.pink};
  }
`

export const Image = styled.div`
  height: 280px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};

  .filter {
    background-color: rgba(0, 0, 0, 0.5);
    height: 280px;
  }
`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;

  align-self: flex-end;
  margin-top: 156px;
`
export const Info = styled.p`
  padding-top: 24px;
  font-size: 32px;
  font-weight: 100;
`
export const CartLink = styled.a`
  cursor: pointer;
`
