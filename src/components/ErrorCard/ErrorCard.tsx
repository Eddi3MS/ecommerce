import { Link } from 'react-router-dom'
import { Card } from '@src/components'
import styles from './styles.module.scss'

const ErrorCard = ({
  errorMessage = 'Something went wrong. Try again later.',
  notFound = false,
}: {
  errorMessage?: string
  notFound?: boolean
}) => {
  return (
    <Card className={styles.c_error_card}>
      <Card.Image src={notFound ? '/not_found.gif' : '/error_page.gif'} />
      <p>{errorMessage}</p>
      <Link to="/">go back home</Link>
    </Card>
  )
}

export default ErrorCard
