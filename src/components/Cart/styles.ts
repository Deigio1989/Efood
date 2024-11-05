import styled from 'styled-components'
import { cores } from '../../styles'
import { CartButton } from '../DishesList/Dish/styles'

export const Sidebar = styled.aside`
  color: ${cores.bege2};
  background-color: ${cores.rosa};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  ${CartButton} {
    width: 100%;
    margin-top: 16px;
  }
`
export const CartContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  &.isOpen {
    display: flex;
  }
`
export const CartItem = styled.li`
  color: ${cores.rosa};
  background-color: ${cores.bege2};
  position: relative;
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  .lixeira {
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
  }
`
export const Info = styled.div`
  padding-left: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
`
