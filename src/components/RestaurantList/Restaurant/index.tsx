import estrela from '../../../assets/images/estrela.png'
import {
  Button,
  Card,
  Infos,
  Rating,
  Tag,
  TagContainer,
  Title,
  TitleLine
} from './styles'

type Props = {
  title: string
  tag: string
  description: string
  rating: number
  img: string
  imgAlt: string
  id: number
}

export default function Restaurant({
  title,
  tag,
  description,
  rating,
  img,
  imgAlt,
  id
}: Props) {
  return (
    <Card>
      <img src={img} alt={imgAlt} />
      <Infos>
        <TagContainer>
          <Tag key={tag}>{tag}</Tag>
        </TagContainer>
        <TitleLine>
          <Title>{title}</Title>
          <Rating>
            <img src={estrela} alt="estrela" />
            <Title>{rating}</Title>
          </Rating>
        </TitleLine>
        <p>{description}</p>
        <Button to={`/restaurantes/${id}`}> Saiba mais</Button>
      </Infos>
    </Card>
  )
}
