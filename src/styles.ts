import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  beige: '#FFF8F2',
  pink: '#E66767',
  beige2: '#FFEBD9',
  white: '#FFFFFF',
  lightGrey: '#A3A3A3',
  darkGrey: ' #4b4b4b'
}

type CartButtonProps = {
  margintop: '8px' | '16px' | '0'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
  }

  body{
  background-color: ${colors.beige};
  color: ${colors.pink};
  .container{
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;


  @media (max-width:${breakpoints.desktop}){
    max-width: 80%;
  }
  }
}

`

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const CartButton = styled.button<CartButtonProps>`
  cursor: pointer;
  background-color: ${colors.beige2};
  color: ${colors.pink};
  display: block;
  margin: 0px;
  border: none;
  padding: 4px 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin-top: ${(props) => props.margintop};
`

export const Sidebar = styled.aside`
  color: ${colors.beige2};
  background-color: ${colors.pink};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  ${CartButton} {
    width: 100%;
  }
  &.is-closed {
    display: none;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-top: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CheckoutContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  &.is-open {
    display: flex;
  }
`
