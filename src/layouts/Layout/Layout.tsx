import { NavLink, Outlet } from 'react-router-dom'
import Cart from '../../components/Cart/Cart'
import styles from './styles.module.scss'

const Layout = () => {
  return (
    <main className={styles.l_layout_main}>
      <header className={styles.l_layout_header}>
        <div className={styles.l_layout_header_wrapper}>
          <NavLink to="/">Commerce</NavLink>

          <Cart />
        </div>
      </header>
      <Outlet />
    </main>
  )
}

export default Layout
