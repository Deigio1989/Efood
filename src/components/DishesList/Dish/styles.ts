import styled from 'styled-components'
import { CartButton, colors } from '../../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  color: ${colors.beige2};
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
  ${CartButton} {
    width: 100%;
  }
`
export const Title = styled.h3`
  margin: 8px 0;
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &.isOpen {
    display: flex;
  }

  background-color: rgba(0, 0, 0, 0.8);

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ModalCard = styled.div`
  position: absolute;
  display: flex;
  column-gap: 24px;
  background-color: ${colors.pink};
  padding: 32px;
  color: ${colors.white};
  z-index: 1;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
export const ModalDescription = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
