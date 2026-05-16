import styles from './Header.module.css'

export default function Header({ searchQuery, onSearch, total, filtered }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoBracket}>{`{`}</span>
            <span className={styles.logoC}>C</span>
            <span className={styles.logoBracket}>{`}`}</span>
          </div>
          <div className={styles.brandText}>
            <h1 className={styles.title}>ADS Lab Exam</h1>
            <p className={styles.subtitle}>Advanced Data Structures · C Programming</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>May 20 Exam</span>
          </div>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="m15 15 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={e => onSearch(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button className={styles.clearBtn} onClick={() => onSearch('')}>
                ✕
              </button>
            )}
          </div>
          <div className={styles.counter}>
            <span className={styles.counterNum}>{total}</span>
            <span className={styles.counterLabel}>Questions</span>
          </div>
        </div>
      </div>
    </header>
  )
}
