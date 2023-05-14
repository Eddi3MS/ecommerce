import * as Popover from '@radix-ui/react-popover'
import { useEffect, useState } from 'react'

import { Button } from '..'
import { useAppSelector } from '../../store'
import CartCard from '../CartCard'
import styles from './styles.module.scss'

const Cart = () => {
  const [showPulse, setShowPulse] = useState(false)
  const { cart } = useAppSelector((state) => state.cart)

  const cartLength = cart?.length

  useEffect(() => {
    setShowPulse(true)
    const pulse = setTimeout(() => {
      setShowPulse(false)
    }, 2000)

    return () => clearTimeout(pulse)
  }, [cartLength])

  const totalCart = cart.reduce((acc, att) => {
    acc += att.unit_price * att.quantity

    return acc
  }, 0)

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          className={styles.c_cart_trigger}
          aria-label="open cart popover"
        >
          {cartLength ? (
            <span
              className={[
                styles.c_cart_trigger_counter,
                showPulse ? styles.pulse : '',
              ].join(' ')}
            >
              {cartLength}
            </span>
          ) : null}
          <i className="ph ph-shopping-cart"></i>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.PopoverContent} sideOffset={0}>
          <h2>Your items:</h2>

          {cart.map((product) => (
            <CartCard
              name={product.name}
              id={product.id}
              qtty={product.quantity}
              price={product.unit_price}
            />
          ))}

          <p>{totalCart}</p>
          <button>clear cart</button>
          <button>confirm purchase</button>
          <Popover.Close className={styles.PopoverClose} aria-label="Close">
            <i className="ph ph-x"></i>
          </Popover.Close>
          <Popover.Arrow className={styles.PopoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Cart
