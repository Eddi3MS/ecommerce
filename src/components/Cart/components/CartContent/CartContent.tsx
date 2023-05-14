import { useNavigate } from 'react-router-dom'
import { Button } from '../../..'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { handleClearCart } from '../../../../store/cartSlice/cartSlice'
import { formatToCurrency } from '../../../../utils'
import CartCard from '../CartCard'
import styles from './styles.module.scss'
import { Close } from '@radix-ui/react-popover'

const CartContent = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const totalCart = cart
    .reduce((acc, att) => {
      acc += att.unit_price * att.quantity

      return acc
    }, 0)
    .toFixed(2)

  const handleClear = () => {
    dispatch(handleClearCart())
  }

  const handleConfirm = () => {
    navigate('/success')
    handleClear()
  }

  return (
    <div className={styles.c_cart_content}>
      <h2>Your items:</h2>
      <div className={styles.c_cart_content_products}>
        {cart.map((product) => (
          <CartCard
            name={product.name}
            id={product.id}
            qtty={product.quantity}
            price={product.unit_price}
          />
        ))}
      </div>

      <div className={styles.c_cart_content_total}>
        <span>total:</span> <span>{formatToCurrency(totalCart)}</span>
      </div>
      <div className={styles.c_cart_content_actions}>
        <Button variant="ghost" onClick={handleClear}>
          clear cart
        </Button>
        <Close asChild>
          <Button onClick={handleConfirm}>confirm purchase</Button>
        </Close>
      </div>
    </div>
  )
}

export default CartContent
