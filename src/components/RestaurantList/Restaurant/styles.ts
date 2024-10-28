import styled from 'styled-components'
import { cores } from '../../../styles'
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
  width: 472px;
  height: 398px;
  img {
    margin-bottom: 0;
    display: block;
    width: 472px;
  }
  position: relative;
  ${Button} {
    position: absolute;
    bottom: 8px;
    left: 8px;
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
