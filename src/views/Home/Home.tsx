import { NavLink } from 'react-router-dom'
import { ErrorCard } from '../../components'
import { IError } from '../../errors'
import { useCategories } from '../../queries'
import styles from './styles.module.scss'

const Home = () => {
  const { data, isLoading, error } = useCategories()

  if (isLoading) {
    return <p>loading...</p>
  }

  if (!!error || !data?.length) {
    return (
      <section className={styles.p_home_categories}>
        <ErrorCard
          errorMessage={(error as IError)?.message ?? 'No categories found.'}
        />
      </section>
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
