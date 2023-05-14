import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

const Button = forwardRef(
  (
    { children, className, variant = 'primary', ...rest }: ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={[
          styles.c_button,
          className ? className : '',
          styles[variant],
        ].join(' ')}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button
