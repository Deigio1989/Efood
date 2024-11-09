import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const DishList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  background-color: ${colors.beige};
  padding-top: 64px;
  padding-bottom: 120px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`
