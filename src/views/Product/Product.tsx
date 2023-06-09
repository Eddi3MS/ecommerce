import { Button, Card, ErrorCard, Loading, QttyButton } from '@src/components'
import { IError } from '@src/errors'
import { useProduct } from '@src/queries'
import { useAppDispatch } from '@src/store'
import { handleAddItemToCart } from '@src/store/cartSlice/cartSlice'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from './styles.module.scss'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  const [counter, setCounter] = useState(1)
  const dispatch = useAppDispatch()

  const {
    data: product,
    isLoading,
    error,
  } = useProduct({
    productId: id,
    enabled: !!id,
  })

  if (isLoading) {
    return <Loading />
  }

  if (!!error || !product || !Object.keys(product).length) {
    return (
      <section className={styles.p_product}>
        <ErrorCard
          errorMessage={(error as IError)?.message ?? 'No product found.'}
        />
      </section>
    )
  }

  const handleCounter = (type: 'add' | 'remove') => {
    if (type === 'remove' && counter === 1) return
    setCounter((curr) => (type === 'add' ? curr + 1 : curr - 1))
  }

  const handleAddItem = () => {
    const itemToAdd = {
      name: product.title,
      id: product.id,
      unit_price: product.price,
      quantity: counter,
    }

    dispatch(handleAddItemToCart(itemToAdd))
    setCounter(1)
    toast.success('Product added to the cart!', {
      autoClose: 3000,
    })
  }

  const totalPrice = product.price * counter

  return (
    <section className={styles.p_product}>
      <Card>
        <Card.Row className={styles.p_product_wrapper}>
          <Card.Column>
            <Card.Image src={product.image} alt={`${product?.title} image`} />
          </Card.Column>

          <Card.Column>
            <Card.Title title={product.title} />
            <Card.Column className={styles.p_product_info}>
              <span className={styles.p_product_info_quantity}>
                Quantity:{' '}
                <QttyButton counter={counter} handleCounter={handleCounter} />
              </span>

              <p className={styles.p_product_info_total}>
                total:
                <Card.Price price={totalPrice} style={{ fontWeight: '600' }} />
              </p>
              <Button onClick={handleAddItem}>add to cart</Button>
            </Card.Column>
          </Card.Column>
        </Card.Row>
        <Card.Row>
          <Card.Description description={product.description} />
        </Card.Row>
      </Card>
    </section>
  )
}

export default Product
