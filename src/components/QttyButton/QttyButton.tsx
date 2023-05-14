import { Button } from '@src/components'
import styles from './styles.module.scss'

interface QttyButtonProps {
  counter: number
  handleCounter: (operation: 'add' | 'remove') => void
}

const QttyButton = ({ counter, handleCounter }: QttyButtonProps) => {
  return (
    <div className={styles.c_qtty_button}>
      <Button
        onClick={handleCounter.bind(null, 'remove')}
        type="button"
        className={styles.c_qtty_button_btn}
      >
        <i className="ph ph-minus"></i>
      </Button>
      <span>{counter}</span>
      <Button
        onClick={handleCounter.bind(null, 'add')}
        type="button"
        className={styles.c_qtty_button_btn}
      >
        <i className="ph ph-plus"></i>
      </Button>
    </div>
  )
}

export default QttyButton
