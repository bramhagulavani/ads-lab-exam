import { useEffect, useCallback } from 'react'
import styles from './CodeModal.module.css'

function highlightC(code) {
  const keywords = ['int', 'char', 'float', 'double', 'void', 'struct', 'typedef', 'return',
    'if', 'else', 'while', 'for', 'do', 'switch', 'case', 'break', 'continue',
    'NULL', 'malloc', 'free', 'sizeof', 'printf', 'scanf', 'include', 'define',
    'static', 'const', 'unsigned', 'long', 'short', 'enum', 'union', 'extern']

  const lines = code.split('\n')
  return lines.map((line, lineIdx) => {
    // Escape HTML
    let escaped = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Preprocessor directives
    escaped = escaped.replace(
      /^(#\w+)(\s+.*)$/,
      '<span class="pp">$1</span><span class="pp-arg">$2</span>'
    )

    // Strings
    escaped = escaped.replace(
      /(&quot;[^&]*?&quot;)/g,
      '<span class="str">$1</span>'
    )

    // Single line comments
    escaped = escaped.replace(
      /(\/\/.*$)/,
      '<span class="comment">$1</span>'
    )

    // Numbers
    escaped = escaped.replace(
      /\b(\d+)\b/g,
      '<span class="num">$1</span>'
    )

    // Keywords (careful not to replace inside already-tagged spans or partial words)
    keywords.forEach(kw => {
      const re = new RegExp(`\\b(${kw})\\b`, 'g')
      escaped = escaped.replace(re, (match, p1, offset, str) => {
        // Don't highlight if inside an HTML tag
        const before = str.substring(0, offset)
        const openTags = (before.match(/</g) || []).length
        const closeTags = (before.match(/>/g) || []).length
        if (openTags > closeTags) return match
        return `<span class="kw">${p1}</span>`
      })
    })

    // Function calls
    escaped = escaped.replace(
      /(\b\w+)(\s*\()/g,
      '<span class="fn">$1</span>$2'
    )

    return `<span class="line-num">${String(lineIdx + 1).padStart(3, ' ')}</span>${escaped}`
  }).join('\n')
}

export default function CodeModal({ question, category, onClose, allQuestions, onNavigate }) {
  const currentIndex = allQuestions.findIndex(q => q.id === question.id)
  const prevQ = currentIndex > 0 ? allQuestions[currentIndex - 1] : null
  const nextQ = currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && prevQ) onNavigate(prevQ)
    if (e.key === 'ArrowRight' && nextQ) onNavigate(nextQ)
  }, [onClose, prevQ, nextQ, onNavigate])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const copyCode = () => {
    navigator.clipboard.writeText(question.code)
      .then(() => {
        const btn = document.getElementById('copy-btn')
        if (btn) {
          btn.textContent = '✓ Copied!'
          btn.classList.add(styles.copied)
          setTimeout(() => {
            btn.textContent = 'Copy Code'
            btn.classList.remove(styles.copied)
          }, 2000)
        }
      })
  }

  const highlighted = highlightC(question.code)
  const lineCount = question.code.split('\n').length

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLeft}>
            <span className={styles.modalQNum}>Q{String(question.id).padStart(2, '0')}</span>
            <span
              className={styles.modalTag}
              style={{ '--tag-color': category.color }}
            >
              {category.label}
            </span>
          </div>
          <div className={styles.modalHeaderRight}>
            <span className={styles.lineCount}>{lineCount} lines</span>
            <button id="copy-btn" className={styles.copyBtn} onClick={copyCode}>
              Copy Code
            </button>
            <button className={styles.closeBtn} onClick={onClose} title="Close (Esc)">
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Question */}
        <div className={styles.questionSection}>
          <div className={styles.questionLabel}>Question</div>
          <p className={styles.questionText}>{question.question}</p>
        </div>

        {/* Code Editor */}
        <div className={styles.editorWrap}>
          <div className={styles.editorTopBar}>
            <div className={styles.dots}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
            </div>
            <span className={styles.filename}>solution.c</span>
            <span className={styles.lang}>C</span>
          </div>
          <div className={styles.codeScrollArea}>
            <pre
              className={styles.codeBlock}
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={() => prevQ && onNavigate(prevQ)}
            disabled={!prevQ}
          >
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {prevQ ? `Q${String(prevQ.id).padStart(2, '0')}` : 'First'}
          </button>

          <div className={styles.navDots}>
            {allQuestions.map(q => (
              <button
                key={q.id}
                className={`${styles.navDot} ${q.id === question.id ? styles.navDotActive : ''}`}
                onClick={() => onNavigate(q)}
                title={`Q${q.id}`}
              />
            ))}
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={() => nextQ && onNavigate(nextQ)}
            disabled={!nextQ}
          >
            {nextQ ? `Q${String(nextQ.id).padStart(2, '0')}` : 'Last'}
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.keyHints}>
          <span>← → navigate</span>
          <span>Esc close</span>
        </div>
      </div>
    </div>
  )
}
