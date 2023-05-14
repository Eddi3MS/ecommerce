import { Cart } from '@src/components'
import { NavLink, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './styles.module.scss'

const Layout = () => {
  return (
    <main className={styles.l_layout_main}>
      <header className={styles.l_layout_header}>
        <div className={styles.l_layout_header_wrapper}>
          <NavLink to="/">
            <h1>Commerce</h1>
          </NavLink>

          <Cart />
        </div>
      </header>
      <Outlet />
      <ToastContainer />
    </main>
  )
}

export default Layout
