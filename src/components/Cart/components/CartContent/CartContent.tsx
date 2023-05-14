import { Close } from '@radix-ui/react-popover'
import { Button } from '@src/components'
import { useAppDispatch, useAppSelector } from '@src/store'
import { handleClearCart } from '@src/store/cartSlice/cartSlice'
import { formatToCurrency } from '@src/utils'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CartCard from '../CartCard'
import styles from './styles.module.scss'

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
    toast.success('Cart cleared!', {
      autoClose: 3000,
    })
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
        <Close asChild>
          <Button variant="ghost" onClick={handleClear}>
            clear cart
          </Button>
        </Close>
        <Close asChild>
          <Button onClick={handleConfirm}>confirm purchase</Button>
        </Close>
      </div>
    </div>
  )
}

export default CartContent
