import styled from 'styled-components'
import { colors } from '../../styles'
import ReactInputMask from 'react-input-mask'

export const CartItem = styled.li`
  color: ${colors.pink};
  background-color: ${colors.beige2};
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
export const SplitRow = styled.div`
  width: 100%;
  display: flex;
  flex: auto;
  column-gap: 34px;
  .small-input {
    max-width: 87px;
  }
  .number-input {
    width: 228px;
  }
`
export const Input = styled.input`
  background-color: ${colors.beige2};
  border: 1px solid ${colors.beige2};
  padding: 8px;
  display: block;
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${colors.darkGrey};
  &.error {
    border-color: #000;
  }
`
export const MaskInput = styled(ReactInputMask)`
  background-color: ${colors.beige2};
  border: 1px solid ${colors.beige2};
  padding: 8px;
  display: block;
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${colors.darkGrey};
  &.error {
    border-color: #000;
  }
`
