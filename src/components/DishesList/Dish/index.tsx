import { Card, CartButton, Modal, ModalCard, ModalDescription } from './styles'
import close from '../../../assets/images/close_1.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  img: string
  imgAlt: string
  portion: string
  price: number
}

export function formataPreco(preco = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export default function Dish({
  description,
  img,
  imgAlt,
  title,
  portion,
  price
}: Props) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Card>
        <img src={img} alt={imgAlt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <CartButton onClick={() => setOpenModal(true)}>
          Adicionar ao carrinho
        </CartButton>
      </Card>
      <Modal className={openModal ? 'isOpen' : ''}>
        <ModalCard className="container">
          <img src={img} alt="" />
          <ModalDescription>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{'Serve de ' + portion}</p>
            <CartButton>
              Adicionar ao carrinho - {formataPreco(price)}
            </CartButton>
            <img
              src={close}
              className="close"
              onClick={() => setOpenModal(false)}
            />
          </ModalDescription>
        </ModalCard>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </Modal>
    </>
  )
}
