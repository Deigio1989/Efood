import { Card, Modal, ModalCard, ModalDescription } from './styles'
import close from '../../../assets/images/close_1.png'
import { useState } from 'react'
import { CartButton, Overlay } from '../../../styles'
import { formatDescription } from '../../RestaurantList'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../../store/reducers/Cart'
import { RootReducer } from '../../../store'
import { parseToBrl } from '../../../utils/enums'

export type DishType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  cardapio: DishType
}

export default function Dish(props: Props) {
  const [openModal, setOpenModal] = useState(false)
  const description = formatDescription(props.cardapio.descricao, 150) + '...'
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const dish = props.cardapio
  function addToCart() {
    dispatch(
      add({
        foto: dish.foto,
        preco: dish.preco,
        id: items.length + 1,
        nome: dish.nome,
        descricao: dish.descricao,
        porcao: dish.porcao
      })
    )
    dispatch(open())
    setOpenModal(false)
  }

  return (
    <>
      <Card>
        <img src={props.cardapio.foto} alt={props.cardapio.nome} />
        <h3>{props.cardapio.nome}</h3>
        <p>{description}</p>
        <CartButton margintop="0" onClick={() => setOpenModal(true)}>
          Adicionar ao carrinho
        </CartButton>
      </Card>
      <Modal className={openModal ? 'isOpen' : ''}>
        <ModalCard className="container">
          <img src={props.cardapio.foto} alt="" />
          <ModalDescription>
            <h3>{props.cardapio.nome}</h3>
            <p> {description}</p>
            <p>{'Serve de ' + props.cardapio.porcao}</p>
            <CartButton margintop="16px" onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(props.cardapio.preco)}
            </CartButton>
            <img
              src={close}
              className="close"
              onClick={() => setOpenModal(false)}
            />
          </ModalDescription>
        </ModalCard>
        <Overlay onClick={() => setOpenModal(false)} />
      </Modal>
    </>
  )
}
