import Loader from '../Loader'
import Restaurant from './Restaurant'
import { Body, List } from './styles'

type Props = {
  restaurants?: RestaurantType[]
  isLoading: boolean
}

export function formatDescription(descr: string, final: number) {
  return descr.slice(0, final)
}
export default function RestaurantList({ restaurants, isLoading }: Props) {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Body className="container">
      <List>
        {restaurants &&
          restaurants.map((rest) => (
            <li key={rest.id}>
              <Restaurant
                description={formatDescription(rest.descricao, 290) + '...'}
                id={rest.id}
                imgAlt={rest.tipo}
                rating={rest.avaliacao}
                tag={rest.tipo}
                img={rest.capa}
                title={rest.titulo}
                destaque={rest.destacado}
              />
            </li>
          ))}
      </List>
    </Body>
  )
}
