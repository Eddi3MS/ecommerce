import { Card, QttyButton } from '@src/components'
import { useAppDispatch } from '@src/store'
import {
  handleChangeCartItemQtty,
  handleRemoveProductFromCart,
} from '@src/store/cartSlice/cartSlice'
import { toast } from 'react-toastify'
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
    if (qtty === 1 && type === 'remove') {
      dispatch(handleRemoveProductFromCart({ id }))
      toast.success('Product removed from the cart!', {
        autoClose: 3000,
      })
      return
    }

    dispatch(handleChangeCartItemQtty({ id, type }))
  }

  return (
    <Card className={styles.c_cart_card}>
      <Card.Title
        title={name}
        className={[styles.c_cart_card_title, 'clamp-1'].join(' ')}
      />
      <Card.Row>
        <QttyButton counter={qtty} handleCounter={handleCounter} />

        <Card.Price price={price * qtty} className={styles.c_cart_card_price} />
      </Card.Row>
    </Card>
  )
}

export default CartCard
