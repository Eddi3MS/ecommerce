import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { Button } from '../../components'

const Layout = () => {
  return (
    <main className={styles.l_layout_main}>
      <header className={styles.l_layout_header}>
        <div className={styles.l_layout_header_wrapper}>
          <NavLink to="/">Commerce</NavLink>

          <Button className={styles.l_layout_header_wrapper_button}>
            <i className="ph ph-shopping-cart"></i>
          </Button>
        </div>
      </header>
      <Outlet />
    </main>
  )
}

export default Layout
