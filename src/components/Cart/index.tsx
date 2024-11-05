import { CartButton } from '../DishesList/Dish/styles'
import lixeira from '../../assets/images/lixeira.png'
import { CartContainer, CartItem, Info, Price, Sidebar } from './styles'
import { Overlay } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'
import image from '../../assets/images/imagem.png'
import { formataPreco } from '../DishesList/Dish'

export default function Cart() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)

  function closeCart() {
    dispatch(close())
  }

  function removeCartItem(id: number) {
    dispatch(remove(id))
  }

  function getTotalPrice() {
    return items.reduce((total, item) => {
      return (total += item.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.nome}>
              <img src={item.foto} alt={item.nome} />
              <Info>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </Info>
              <img
                className="lixeira"
                src={lixeira}
                alt=""
                onClick={() => removeCartItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Price>
        <CartButton>Continuar com a entrega</CartButton>
      </Sidebar>
    </CartContainer>
  )
}
