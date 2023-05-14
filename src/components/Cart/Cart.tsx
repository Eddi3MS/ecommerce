import { Button, Card } from '@src/components'
import { useAppSelector } from '@src/store'
import { useEffect, useState } from 'react'
import Popover from '../Popover'
import { CartContent } from './components'
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

  return (
    <Popover>
      <Popover.Trigger>
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
      <Popover.Content>
        {cartLength ? (
          <CartContent />
        ) : (
          <Card className={styles.c_cart_no_content}>
            <Card.Image src="/no_items.gif" />
            <Card.Title title="There is no items in your cart yet." />
          </Card>
        )}
        <Popover.Arrow />
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
}

export default Cart
