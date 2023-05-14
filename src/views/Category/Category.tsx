import { Card, ErrorCard, Loading } from '@src/components'
import { IError } from '@src/errors'
import { useCategories, useCategory } from '@src/queries'
import { CategoryType } from '@src/services/fakeService/DTO'
import { NavLink, useParams } from 'react-router-dom'
import styles from './styles.module.scss'

const Category = () => {
  const { data: categories } = useCategories()
  const { category } = useParams()
  const currentCategory = categories?.find((cat) => cat.route === category)

  const { data, isLoading, error } = useCategory({
    category: category?.replace('-', ' ') as CategoryType,
    enabled: !!category,
  })

  if (isLoading) {
    return <Loading />
  }

  if (!!error || !data?.length) {
    return (
      <section className={styles.p_category}>
        <ErrorCard
          errorMessage={(error as IError)?.message || 'No products found.'}
        />
      </section>
    )
  }

  return (
    <section className={styles.p_category}>
      <div className={styles.p_category_heading}>
        <h2>
          <i className={currentCategory?.icon} aria-hidden></i>
          <span style={{ textTransform: 'capitalize' }}>
            {currentCategory?.name}
          </span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
          dolorum obcaecati voluptate a similique cum blanditiis!
        </p>
      </div>

      <div className={styles.p_category_products}>
        {data?.map((p) => (
          <NavLink to={`/products/${String(p.id)}`} key={p.id}>
            <Card>
              <Card.Image src={p.image} alt={`${p.title} image`} />
              <Card.Title title={p.title} className="clamp-2" />
              <Card.Price price={p.price} />
            </Card>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Category
