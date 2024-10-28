import { Card, CartButton } from './styles'

type Props = {
  title: string
  description: string
  img: string
  imgAlt: string
}
export default function Dish({ description, img, imgAlt, title }: Props) {
  return (
    <Card>
      <img src={img} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <CartButton>Adicionar ao carrinho</CartButton>
    </Card>
  )
}
