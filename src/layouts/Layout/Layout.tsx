import { NavLink, Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const Layout = () => {
  return (
    <main className={styles.l_layout_main}>
      <header className={styles.l_layout_header}>
        <div className={styles.l_layout_header_wrapper}>
          <NavLink to="/">Commerce</NavLink>

          <button className={styles.l_layout_button}>
            <i className="ph ph-shopping-cart"></i>
          </button>
        </div>
      </header>
      <Outlet />
    </main>
  )
}

export default Layout
