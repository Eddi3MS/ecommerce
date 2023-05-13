import { useParams } from 'react-router-dom'
import { Card } from '../../components'
import { useProduct } from '../../queries'
import styles from './styles.module.css'
import { AppError, ErrorHandling } from '../../errors'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: product,
    isLoading,
    error,
  } = useProduct({
    productId: id,
    enabled: !!id,
  })

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

  return (
    <section className={styles.p_product}>
      <Card
        key={product?.id}
        description={product?.description}
        image={product?.image}
        title={product?.title}
        price={product?.price}
      />
    </section>
  )
}

export default Product
