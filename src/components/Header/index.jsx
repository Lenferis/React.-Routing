import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.sass'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        MyApp
      </Link>

      <nav className={styles.nav}>
        <NavLink
          exact
          to="/"
          className={styles['nav-link']}
          activeClassName={styles['nav-link--active']}
        >
          Головна
        </NavLink>
        <NavLink
          to="/components"
          className={styles['nav-link']}
          activeClassName={styles['nav-link--active']}
        >
          Компоненти
        </NavLink>
        <NavLink
          to="/about"
          className={styles['nav-link']}
          activeClassName={styles['nav-link--active']}
        >
          Про себе
        </NavLink>
      </nav>
    </header>
  )
}

export default Header