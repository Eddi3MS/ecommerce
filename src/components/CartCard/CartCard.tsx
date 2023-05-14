import { Card, QttyButton } from '..'
import { useAppDispatch } from '../../store'
import {
  handleChangeCartItemQtty,
  handleRemoveProductFromCart,
} from '../../store/cartSlice/cartSlice'

interface CartCard {
  name: string
  id: number
  qtty: number
  price: number
}

const CartCard = ({ id, name, price, qtty }: CartCard) => {
  const dispatch = useAppDispatch()

  const handleCounter = (type: 'add' | 'remove') => {
    if (qtty === 1 && type === 'remove')
      return dispatch(handleRemoveProductFromCart({ id }))

    dispatch(handleChangeCartItemQtty({ id, type }))
  }

  return (
    <Card>
      <Card.Title title={name} style={{ fontSize: '1rem' }} />
      <Card.Row>
        <QttyButton counter={qtty} handleCounter={handleCounter} />

        <Card.Price price={price * qtty} />
      </Card.Row>
    </Card>
  )
}

export default CartCard
