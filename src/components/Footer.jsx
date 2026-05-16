import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.label}>Advanced Data Structures</span>
          <span className={styles.separator}>·</span>
          <span className={styles.label}>Lab Exam Preparation</span>
          <span className={styles.separator}>·</span>
          <span className={styles.label}>C Programming</span>
        </div>

        <div className={styles.brand}>
          {'M A R C O'.split('').map((ch, i) => (
            <span key={i} className={ch === ' ' ? styles.space : styles.char}>
              {ch}
            </span>
          ))}
        </div>

        <div className={styles.right}>
          <span className={styles.label}>25 Programs</span>
          <span className={styles.separator}>·</span>
          <span className={styles.label}>May 20, 2025</span>
        </div>
      </div>
    </footer>
  )
}
