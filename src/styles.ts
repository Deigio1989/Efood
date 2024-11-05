import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  bege: '#FFF8F2',
  rosa: '#E66767',
  bege2: '#FFEBD9',
  branco: '#FFFFFF',
  cinzaClaro: '#A3A3A3'
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
  background-color: ${cores.bege};
  color: ${cores.rosa};
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
