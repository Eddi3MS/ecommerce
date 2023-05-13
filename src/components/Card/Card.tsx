import { formatToCurrency } from '../../utils'
import styles from './styles.module.css'

interface CardProps {
  image: string
  title: string
  description: string
  price: number
}
const Card = ({ image, title, description, price }: CardProps) => {
  return (
    <article className={styles.c_card}>
      <div className="">
        <img
          src={image}
          alt=""
          width={200}
          height={200}
          className="aspect-square"
        />
      </div>
      <div className="">
        <h2 className="">{title}</h2>
        <p className="">{description}</p>
        <p className="">{formatToCurrency(String(price * 100))}</p>
      </div>
    </article>
  )
}

export default Card
