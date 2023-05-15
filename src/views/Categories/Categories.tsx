import { ErrorCard, Loading } from '@src/components'
import { IError } from '@src/errors'
import { useCategories } from '@src/queries'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Categories = () => {
  const { data, isLoading, error } = useCategories()

  if (isLoading) {
    return <Loading />
  }

  if (!!error || !data?.length) {
    return (
      <section className={styles.p_categories}>
        <ErrorCard
          errorMessage={(error as IError)?.message ?? 'No categories found.'}
        />
      </section>
    )
  }

  return (
    <section className={styles.p_categories}>
      {data?.map((category) => (
        <NavLink to={`${category.route.replace(' ', '-')}`} key={category.id}>
          <i className={category.icon}></i>
          <span style={{ textTransform: 'capitalize' }}>{category.name}</span>
        </NavLink>
      ))}
    </section>
  )
}

export default Categories
