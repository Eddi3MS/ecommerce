import * as PopoverRoot from '@radix-ui/react-popover'
import { ComponentProps } from 'react'
import styles from './styles.module.scss'

const Popover = ({
  children,
  ...rest
}: ComponentProps<typeof PopoverRoot.Root>) => {
  return <PopoverRoot.Root {...rest}>{children}</PopoverRoot.Root>
}

const Content = ({
  children,
  className,
  sideOffset = 5,
  ...rest
}: ComponentProps<typeof PopoverRoot.Content>) => {
  return (
    <PopoverRoot.Portal>
      <PopoverRoot.Content
        className={[styles.PopoverContent, className].join(' ')}
        sideOffset={sideOffset}
        {...rest}
      >
        {children}
      </PopoverRoot.Content>
    </PopoverRoot.Portal>
  )
}

const Trigger = ({
  children,
  ...rest
}: ComponentProps<typeof PopoverRoot.Trigger>) => {
  return (
    <PopoverRoot.Trigger asChild {...rest}>
      {children}
    </PopoverRoot.Trigger>
  )
}

const Close = () => {
  return (
    <PopoverRoot.Close className={styles.PopoverClose} aria-label="Close">
      <i className="ph ph-x"></i>
    </PopoverRoot.Close>
  )
}

const Arrow = () => {
  return <PopoverRoot.Arrow className={styles.PopoverArrow} />
}

Popover.Content = Content
Popover.Close = Close
Popover.Arrow = Arrow
Popover.Trigger = Trigger

export default Popover
