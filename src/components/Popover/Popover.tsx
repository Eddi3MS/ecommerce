import * as PopoverRoot from '@radix-ui/react-popover'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

const Popover = ({
  children,
  content,
}: {
  children: ReactNode
  content: ReactNode
}) => {
  return (
    <PopoverRoot.Root>
      <PopoverRoot.Trigger asChild>{children}</PopoverRoot.Trigger>
      <PopoverRoot.Portal>
        <PopoverRoot.Content className={styles.PopoverContent} sideOffset={0}>
          {content}
          <PopoverRoot.Close className={styles.PopoverClose} aria-label="Close">
            <i className="ph ph-x"></i>
          </PopoverRoot.Close>
          <PopoverRoot.Arrow className={styles.PopoverArrow} />
        </PopoverRoot.Content>
      </PopoverRoot.Portal>
    </PopoverRoot.Root>
  )
}

export default Popover
