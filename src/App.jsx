import { useState, useMemo, useCallback } from 'react'
import { questions } from './data/questions.js'

import QuestionCard from './components/QuestionCard.jsx'
import CodeModal from './components/CodeModal.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import styles from './App.module.css'

function getCategory(question) {

  const q = question.toLowerCase()

  if (q.includes('threaded')) {
    return {
      label: 'Threaded BT',
      color: '#7c3aed'
    }
  }

  if (q.includes('avl')) {
    return {
      label: 'AVL Tree',
      color: '#2563eb'
    }
  }

  if (q.includes('red-black')) {
    return {
      label: 'Red-Black Tree',
      color: '#dc2626'
    }
  }

  if (q.includes('b+ tree') || q.includes('b+ ')) {
    return {
      label: 'B+ Tree',
      color: '#059669'
    }
  }

  if (
    q.includes('b-tree') ||
    q.includes('b tree') ||
    (q.includes('b-') && q.includes('tree'))
  ) {
    return {
      label: 'B-Tree',
      color: '#d97706'
    }
  }

  if (
    q.includes('heap') ||
    q.includes('priority queue')
  ) {
    return {
      label: 'Heap / PQ',
      color: '#7c3aed'
    }
  }

  if (q.includes('dijkstra')) {
    return {
      label: 'Graph',
      color: '#0891b2'
    }
  }

  if (
    q.includes('trie') ||
    q.includes('suffix tree')
  ) {
    return {
      label: 'Trie / Suffix',
      color: '#be185d'
    }
  }

  if (
    q.includes('skip list') ||
    q.includes('treap') ||
    q.includes('quad tree') ||
    q.includes('interval tree') ||
    q.includes('segment tree')
  ) {
    return {
      label: 'Advanced',
      color: '#64748b'
    }
  }

  return {
    label: 'Data Structure',
    color: '#475569'
  }
}

export default function App() {

  const [selectedQuestion, setSelectedQuestion] =
    useState(null)

  const [searchQuery, setSearchQuery] =
    useState('')

  const [activeFilter, setActiveFilter] =
    useState('All')

  const categories = [
    'All',
    'Threaded BT',
    'AVL Tree',
    'Red-Black Tree',
    'B-Tree',
    'B+ Tree',
    'Heap / PQ',
    'Graph',
    'Trie / Suffix',
    'Advanced'
  ]

  const filteredQuestions = useMemo(() => {

    const query =
      searchQuery
        .toLowerCase()
        .trim()

    return questions.filter((q) => {

      const category =
        getCategory(q.question)

      const matchesFilter =
        activeFilter === 'All' ||
        category.label === activeFilter

      if (!query) {
        return matchesFilter
      }

      const questionText =
        q.question.toLowerCase()

      const categoryText =
        category.label.toLowerCase()

      const id =
        String(q.id)

      const qid =
        `q${q.id}`

      const matchesSearch =

        questionText.includes(query) ||

        categoryText.includes(query) ||

        id === query ||

        qid === query ||

        id.includes(query) ||

        qid.includes(query)

      return matchesFilter && matchesSearch

    })

  }, [searchQuery, activeFilter])

  const handleOpen = useCallback((q) => {
    setSelectedQuestion(q)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedQuestion(null)
  }, [])

  return (
    <div className={styles.app}>

      <div
        className={styles.bgGrid}
        aria-hidden="true"
      />

      <div
        className={styles.bgGlow}
        aria-hidden="true"
      />

      <Header
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        total={questions.length}
        filtered={filteredQuestions.length}
      />

      <main className={styles.main}>

        {/* FILTER BAR */}
        <div className={styles.filterBar}>

          <div className={styles.filterScroll}>

            {categories.map((cat) => (

              <button
                key={cat}
                className={`
                  ${styles.filterBtn}
                  ${
                    activeFilter === cat
                      ? styles.filterBtnActive
                      : ''
                  }
                `}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

        {/* RESULTS INFO */}
        <div className={styles.resultsInfo}>

          <span className={styles.resultsCount}>

            {
              filteredQuestions.length === questions.length

                ? `All ${questions.length} Questions`

                : `${filteredQuestions.length} of ${questions.length} Questions`
            }

          </span>

          {searchQuery && (

            <span className={styles.searchLabel}>

              for "<em>{searchQuery}</em>"

            </span>

          )}

        </div>

        {/* QUESTION GRID */}
        {filteredQuestions.length > 0 ? (

          <div className={styles.grid}>

            {filteredQuestions.map((q, idx) => (

              <QuestionCard
                key={q.id}
                question={q}
                index={idx}
                category={getCategory(q.question)}
                onClick={() => handleOpen(q)}
              />

            ))}

          </div>

        ) : (

          <div className={styles.noResults}>

            <div className={styles.noResultsIcon}>
              {'{ }'}
            </div>

            <p>
              No questions match your search.
            </p>

            <button
              className={styles.resetBtn}
              onClick={() => {
                setSearchQuery('')
                setActiveFilter('All')
              }}
            >
              Reset Filters
            </button>

          </div>

        )}

      </main>

      <Footer />

      {/* MODAL */}
      {selectedQuestion && (

        <CodeModal
          question={selectedQuestion}
          category={
            getCategory(
              selectedQuestion.question
            )
          }
          onClose={handleClose}
          allQuestions={questions}
          onNavigate={setSelectedQuestion}
        />

      )}

    </div>
  )
}