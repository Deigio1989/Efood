export default class RestaurantClass {
  title: string
  tag: string[]
  rating: string
  description: string
  image: string
  id: number
  imgAlt: string

  constructor(
    title: string,
    tag: string[],
    rating: string,
    description: string,
    image: string,
    imgAlt: string,
    id: number
  ) {
    this.title = title
    this.tag = tag
    this.rating = rating
    this.description = description
    this.id = id
    this.image = image
    this.imgAlt = imgAlt
  }
}
