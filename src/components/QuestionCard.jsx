import styles from './QuestionCard.module.css'

export default function QuestionCard({ question, index, category, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      style={{ animationDelay: `${Math.min(index * 40, 500)}ms` }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className={styles.cardTop}>
        <div className={styles.numBadge}>
          <span className={styles.numPrefix}>Q</span>
          <span className={styles.numVal}>{String(question.id).padStart(2, '0')}</span>
        </div>
        <span
          className={styles.tag}
          style={{ '--tag-color': category.color }}
        >
          {category.label}
        </span>
      </div>

      <p className={styles.questionText}>{question.question}</p>

      <div className={styles.cardBottom}>
        <div className={styles.codePreview}>
          <span className={styles.codeIcon}>{'</>'}</span>
          <span className={styles.codeHint}>View Solution</span>
        </div>
        <svg className={styles.arrow} viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className={styles.hoverLine} style={{ '--line-color': category.color }} />
    </div>
  )
}
