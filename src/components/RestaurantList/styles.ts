import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
export const Body = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
`
