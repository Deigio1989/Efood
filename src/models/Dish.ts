export default class DishClass {
  title: string
  description: string
  image: string
  id: number
  imgAlt: string

  constructor(
    title: string,
    description: string,
    image: string,
    imgAlt: string,
    id: number
  ) {
    this.title = title
    this.description = description
    this.id = id
    this.image = image
    this.imgAlt = imgAlt
  }
}
