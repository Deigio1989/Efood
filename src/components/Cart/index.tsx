import lixeira from '../../assets/images/lixeira.png'
import { CartItem, Info, Input, MaskInput, Price, SplitRow } from './styles'
import { CartButton, CheckoutContainer, Overlay, Sidebar } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { clear, close, remove } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { DeliveryStage } from '../../utils/enums/deliveryStage'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils/enums'

export default function Cart() {
  const [purchase, { isError, isLoading, isSuccess, data }] =
    usePurchaseMutation()
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [deliveryStage, setDeliveryStage] = useState(DeliveryStage.CART)
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '12',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '123',
      month: '12',
      year: '1234'
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome deve ter pelo menos cinco caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .length(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome deve ter pelo menos cinco caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      code: Yup.string()
        .length(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number)
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })
  function closeCart() {
    if (deliveryStage === DeliveryStage.CART) {
      dispatch(close())
    }
  }

  function removeCartItem(id: number) {
    dispatch(remove(id))
  }

  const navigate = useNavigate()

  function handleCheckout() {
    dispatch(close())
    dispatch(clear())
    navigate('/')
  }

  function getTotalPrice() {
    return items.reduce((total, item) => {
      return (total += item.preco)
    }, 0)
  }

  function checkInputError(fieldName: string) {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  function getErrorMessage(fieldName: string, message?: string) {
    const hasError = checkInputError(fieldName)
    if (hasError) {
      return message
    } else {
      return ''
    }
  }

  function continueToCheckout() {
    form.setTouched({
      cardName: true,
      cardNumber: true,
      code: true,
      month: true,
      year: true
    })

    const isPaymentValid =
      !form.errors.cardName &&
      !form.errors.cardNumber &&
      !form.errors.code &&
      !form.errors.month &&
      !form.errors.year &&
      form.values.cardName !== '' &&
      form.values.cardNumber !== '' &&
      form.values.code !== '' &&
      form.values.month !== ''

    if (isPaymentValid) {
      setDeliveryStage(DeliveryStage.CHECKOUT)
    }
  }

  function continueToPayment() {
    form.setTouched({
      receiver: true,
      address: true,
      city: true,
      zipCode: true,
      number: true,
      complement: true
    })

    const isAddressValid =
      !form.errors.receiver &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.zipCode &&
      !form.errors.number &&
      !form.errors.complement &&
      form.values.receiver !== '' &&
      form.values.address !== '' &&
      form.values.city !== '' &&
      form.values.zipCode !== '' &&
      form.values.number !== ''

    if (isAddressValid) {
      setDeliveryStage(DeliveryStage.PAYMENT)
    }
  }

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar
        className={deliveryStage === DeliveryStage.CART ? '' : 'is-closed'}
      >
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.nome}>
                  <img src={item.foto} alt={item.nome} />
                  <Info>
                    <h4>{item.nome}</h4>
                    <p>{parseToBrl(item.preco)}</p>
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
              <p>{parseToBrl(getTotalPrice())}</p>
            </Price>
            <CartButton
              margintop="16px"
              onClick={() => setDeliveryStage(DeliveryStage.ADDRESS)}
            >
              Continuar com a entrega
            </CartButton>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
      <Sidebar
        className={deliveryStage === DeliveryStage.ADDRESS ? '' : 'is-closed'}
      >
        <h3>Entrega</h3>
        <form>
          <label htmlFor="receiver">Quem irá receber</label>
          <Input
            id="receiver"
            type="text"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('receiver') ? 'error' : ''}
          />
          <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
          <label htmlFor="address">Endereço</label>
          <Input
            id="address"
            type="text"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('address') ? 'error' : ''}
          />
          <small>{getErrorMessage('address', form.errors.address)}</small>
          <label htmlFor="city">Cidade</label>
          <Input
            id="city"
            type="text"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('city') ? 'error' : ''}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
          <SplitRow>
            <div>
              <label htmlFor="zipcode">Cep</label>
              <MaskInput
                id="zipcode"
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('zipCode') ? 'error' : ''}
                mask="999999-999"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <Input
                id="number"
                type="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('number') ? 'error' : ''}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </div>
          </SplitRow>
          <label htmlFor="complement">Complemento (opcional)</label>
          <Input
            id="complement"
            type="text"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('complement') ? 'error' : ''}
          />
          <small>{getErrorMessage('complement', form.errors.complement)}</small>
        </form>
        <CartButton margintop="16px" onClick={continueToPayment}>
          Continuar com o pagamento
        </CartButton>
        <CartButton
          margintop="8px"
          onClick={() => setDeliveryStage(DeliveryStage.CART)}
        >
          Voltar para o carrinho
        </CartButton>
      </Sidebar>
      <Sidebar
        className={deliveryStage === DeliveryStage.PAYMENT ? '' : 'is-closed'}
      >
        <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h3>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="cardName">Nome no cartão</label>
          <Input
            id="cardName"
            type="text"
            name="cardName"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('cardName') ? 'error' : ''}
          />
          <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          <SplitRow>
            <div className="number-input">
              <label htmlFor="cardNumber">Número do cartão</label>
              <MaskInput
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </div>
            <div className="small-input">
              <label htmlFor="code">CVV</label>
              <MaskInput
                id="code"
                type="text"
                name="code"
                value={form.values.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('code') ? 'error' : ''}
                mask="999"
              />
              <small>{getErrorMessage('code', form.errors.code)}</small>
            </div>
          </SplitRow>
          <SplitRow>
            <div>
              <label htmlFor="expMonth">Mês de vencimento</label>
              <Input
                id="expMonth"
                type="number"
                max="12"
                min="1"
                name="month"
                value={form.values.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('month') ? 'error' : ''}
              />
              <small>{getErrorMessage('month', form.errors.month)}</small>
            </div>
            <div>
              <label htmlFor="expYear">Ano de Vencimento</label>
              <MaskInput
                id="expYear"
                type="text"
                name="year"
                value={form.values.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('year') ? 'error' : ''}
                mask="9999"
              />
              <small>{getErrorMessage('year', form.errors.year)}</small>
            </div>
          </SplitRow>
          <CartButton
            type="submit"
            margintop="16px"
            onClick={continueToCheckout}
          >
            Finalizar pagamento
          </CartButton>
          <CartButton
            margintop="8px"
            onClick={() => setDeliveryStage(DeliveryStage.ADDRESS)}
          >
            Voltar para a edição de endereço
          </CartButton>
        </form>
      </Sidebar>
      <Sidebar
        className={deliveryStage === DeliveryStage.CHECKOUT ? '' : 'is-closed'}
      >
        {isSuccess && data ? (
          <>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <CartButton margintop="0" onClick={handleCheckout}>
              Concluir
            </CartButton>
          </>
        ) : (
          <p>Algo deu errado no seu pedido. Por favor tente novamente.</p>
        )}
      </Sidebar>
    </CheckoutContainer>
  )
}
