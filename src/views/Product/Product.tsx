import { useParams } from 'react-router-dom'
import { Button, Card, QttyButton } from '../../components'
import { useProduct } from '../../queries'
import styles from './styles.module.scss'
import { AppError, ErrorHandling } from '../../errors'
import { useState } from 'react'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  const [counter, setCounter] = useState(1)

  const {
    data: product,
    isLoading,
    error,
  } = useProduct({
    productId: id,
    enabled: !!id,
  })

  const handleCounter = (type: 'add' | 'remove') => {
    if (type === 'remove' && counter === 1) return
    setCounter((curr) => (type === 'add' ? curr + 1 : curr - 1))
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  if (error || !product) {
    const errorHandling = new ErrorHandling(
      error,
      'Something went wrong when listing the product.'
    )

    throw new AppError(
      errorHandling.error.message,
      errorHandling.error.statusCode
    )
  }

  const totalPrice = product.price * counter

  return (
    <section className={styles.p_product}>
      <Card>
        <Card.Row>
          <Card.Column>
            <Card.Image src={product.image} alt={`${product.title} image`} />
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
              <Button>add to cart</Button>
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
