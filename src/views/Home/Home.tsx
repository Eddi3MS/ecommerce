import { NavLink } from 'react-router-dom'
import { useCategories } from '../../queries'
import styles from './styles.module.scss'
import { AppError, ErrorHandling } from '../../errors'

const Home = () => {
  const { data, isLoading, error } = useCategories()

  if (isLoading) {
    return <p>loading...</p>
  }

  if (error || !data?.length) {
    const errorHandling = new ErrorHandling(
      error,
      'Something went wrong when listing categories'
    )

    throw new AppError(
      errorHandling.error.message,
      errorHandling.error.statusCode
    )
  }

  return (
    <section className={styles.p_home_categories}>
      {data?.map((category) => (
        <NavLink to={category.route} key={category.id}>
          <i className={category.icon}></i>
          <span style={{ textTransform: 'capitalize' }}>{category.name}</span>
        </NavLink>
      ))}
    </section>
  )
}

export default Home
