import { Card } from '@src/components'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <Card className={styles.p_success}>
      <Card.Image src="/success.gif" alt="a rocket launching" />
      <Card.Title title="Success! Your items are on the way.." />
      <p>
        Well, not really, cuz I didn't got your shipping address, but you get
        the idea.
      </p>
      <Link to="/">go back home</Link>
    </Card>
  )
}

export default Success
