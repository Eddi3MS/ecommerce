import { ImgHTMLAttributes, HTMLAttributes, DetailsHTMLAttributes } from 'react'
import { formatToCurrency } from '../../utils'
import styles from './styles.module.scss'
import { useImage } from '../../hooks'

type CardProps = HTMLAttributes<HTMLDivElement>
const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <article
      className={[styles.c_card, className ? className : ''].join(' ')}
      {...rest}
    >
      {children}
    </article>
  )
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

const Image = ({ fallback, src, alt = '', className, ...rest }: ImageProps) => {
  const { getImageProps } = useImage({
    src: src ?? '',
    alt,
    fallback: fallback ? fallback : '/base_image.png',
  })

  return (
    <img
      {...getImageProps()}
      className={[styles.c_card_image, className ? className : ''].join(' ')}
      loading="lazy"
      {...rest}
    />
  )
}

type ColumnProps = HTMLAttributes<HTMLDivElement>

const Column = ({ children, className, ...rest }: ColumnProps) => {
  return (
    <div
      className={[styles.c_card_column, className ? className : ''].join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

type RowProps = HTMLAttributes<HTMLDivElement>

const Row = ({ children, className, ...rest }: RowProps) => {
  return (
    <div
      className={[styles.c_card_row, className ? className : ''].join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}

type PriceProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  price: number
}

const Price = ({ price, className, ...rest }: PriceProps) => {
  return (
    <span
      className={[styles.c_card_price, className ? className : ''].join(' ')}
      {...rest}
    >
      {formatToCurrency(price.toFixed(2))}
    </span>
  )
}

type TitleProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  title: string
}

const Title = ({ title, className, ...rest }: TitleProps) => {
  return (
    <h2
      className={[styles.c_card_title, className ? className : ''].join(' ')}
      {...rest}
    >
      {title}
    </h2>
  )
}

type DescriptionProps = Omit<
  DetailsHTMLAttributes<HTMLDetailsElement>,
  'children'
> & {
  description: string
}

const Description = ({ description, className, ...rest }: DescriptionProps) => {
  return (
    <details
      {...rest}
      className={[styles.c_card_description, className ? className : ''].join(
        ' '
      )}
    >
      <summary>
        <i className="ph-bold ph-arrows-down-up"></i> Description
      </summary>
      <ul>
        {description.split(/\.\s(?=[A-Z])/).map((desc, i) => (
          <li key={i + '_li'}>{desc}</li>
        ))}
      </ul>
    </details>
  )
}

Card.Image = Image
Card.Column = Column
Card.Row = Row
Card.Price = Price
Card.Title = Title
Card.Description = Description

export default Card
