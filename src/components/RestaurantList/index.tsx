import RestaurantClass from '../../models/Restaurant'
import Restaurant from './Restaurant'
import { Body, List } from './styles'

type Props = {
  restaurant: RestaurantClass[]
}

export default function RestaurantList({ restaurant }: Props) {
  return (
    <Body className="container">
      <List>
        {restaurant.map((rest) => (
          <Restaurant
            key={rest.title}
            description={rest.description}
            imgAlt={rest.imgAlt}
            rating={rest.rating}
            tag={rest.tag}
            img={rest.image}
            title={rest.title}
          />
        ))}
      </List>
    </Body>
  )
}
