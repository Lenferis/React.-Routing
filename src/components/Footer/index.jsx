import styles from './Footer.module.sass'

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 · Кирило</span>
      <span>React Router v5 · Demo project</span>
    </footer>
  )
}

export default Footer