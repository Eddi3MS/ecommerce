import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.scss'

const Button = forwardRef(
  (
    { children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={[styles.c_button, className ? className : ''].join(' ')}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button
