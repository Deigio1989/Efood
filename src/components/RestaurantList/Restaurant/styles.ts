import styled from 'styled-components'
import { breakpoints, cores } from '../../../styles'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.bege2};
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
`

export const Card = styled.div`
  max-width: 472px;
  max-height: 398px;
  width: 100%;
  height: 100%;
  img {
    margin-bottom: 0;
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
  position: relative;
  ${Button} {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
    margin: 0 auto;
  }
`
export const Infos = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: 0;
  height: 180px;
  padding: 8px;
  background-color: ${cores.branco};
  p {
    size: 14px;
    font-weight: 400;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`
export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Rating = styled.div`
  display: flex;
  img {
    height: 21px;
    width: 21px;
    margin-right: 8px;
  }
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.bege2};
  font-size: 12px;
  padding: 4px 6px;
  line-height: 14px;
  margin-left: 8px;
`
