import { NavLink, useParams } from 'react-router-dom'
import { useCategories, useCategory } from '../../queries'
import { CategoryType } from '../../services/fakeService/DTO'
import { Card } from '../../components'
import styles from './styles.module.css'
import { AppError, ErrorHandling } from '../../errors'

const Category = () => {
  const { data: categories } = useCategories()
  const { category } = useParams<{ category: CategoryType }>()
  const currentCategory = categories?.find((cat) => cat.route === category)

  const { data, isLoading, error } = useCategory({
    category: category,
    enabled: !!category,
  })

  if (isLoading) {
    return <p>loading...</p>
  }

  if (error || !data?.length) {
    const errorHandling = new ErrorHandling(
      error,
      'Something went wrong when listing products'
    )

    throw new AppError(
      errorHandling.error.message,
      errorHandling.error.statusCode
    )
  }

  return (
    <section className={styles.p_category}>
      <div className={styles.p_category_heading}>
        <h1>
          <i className={currentCategory?.icon}></i>
          <span style={{ textTransform: 'capitalize' }}>
            {currentCategory?.name}
          </span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
          dolorum obcaecati voluptate a similique cum blanditiis!
        </p>
      </div>

      {data?.map((p) => (
        <NavLink to={`/products/${String(p.id)}`} className="">
          <Card
            key={p.id}
            description={p.description}
            image={p.image}
            title={p.title}
            price={p.price}
          />
        </NavLink>
      ))}
    </section>
  )
}

export default Category
