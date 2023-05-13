import styles from './styles.module.scss'

const Loading = () => {
  return (
    <section className={styles.c_loading}>
      <div className={styles.dot_spinner}>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
        <div className={styles.dot_spinner__dot}></div>
      </div>
    </section>
  )
}

export default Loading
