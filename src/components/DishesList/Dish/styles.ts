import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.bege2};
  width: 320px;
  height: 338px;
  padding: 8px;

  img {
    width: 304px;
    height: 170px;
    object-fit: cover;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 8px 0;
  }
`
export const Title = styled.h3`
  margin: 8px 0;
`

export const CartButton = styled.button`
  background-color: ${cores.bege2};
  color: ${cores.rosa};
  display: block;
  margin: 0px;
  width: 100%;
  border: none;
  padding: 4px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`
