import { Card } from '../../components'
import styles from './styles.module.scss'

const Success = () => {
  return (
    <Card className={styles.p_success}>
      <Card.Image src="/success.gif" alt="a rocket launching" />
      <Card.Title title="Success! Your items are on the way.." />
      <p>
        Well, not really, cuz I didn't got your shipping address, but you get
        the idea.
      </p>
    </Card>
  )
}

export default Success
