import { RestaurantType } from '../../pages/Home'
import Restaurant from './Restaurant'
import { Body, List } from './styles'

type Props = {
  restaurants: RestaurantType[]
}

export function formatDescription(descr: string, final: number) {
  return descr.slice(0, final)
}
export default function RestaurantList({ restaurants }: Props) {
  return (
    <Body className="container">
      <List>
        {restaurants.map((rest) => (
          <li key={rest.titulo}>
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
