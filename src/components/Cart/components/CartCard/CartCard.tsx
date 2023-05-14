import { Card, QttyButton } from '../../..'
import { useAppDispatch } from '../../../../store'
import {
  handleChangeCartItemQtty,
  handleRemoveProductFromCart,
} from '../../../../store/cartSlice/cartSlice'
import styles from './styles.module.scss'

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
    <Card className={styles.c_cart_card}>
      <Card.Title title={name} className={styles.c_cart_card_title} />
      <Card.Row>
        <QttyButton counter={qtty} handleCounter={handleCounter} />

        <Card.Price price={price * qtty} className={styles.c_cart_card_price} />
      </Card.Row>
    </Card>
  )
}

export default CartCard
