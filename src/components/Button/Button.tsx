import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={[styles.c_button, className ? className : ''].join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
