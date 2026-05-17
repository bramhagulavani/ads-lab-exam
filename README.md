# ADS Lab Exam — Advanced Data Structures in C

A modern interactive study platform for **Advanced Data Structures (ADS) Lab Exam Preparation** built using **React + Vite**.

The project contains categorized ADS lab programs, syntax-highlighted C code solutions, algorithms, keyboard navigation, search/filter system, and a modern IDE-inspired UI.

---

# ✨ Features

- 📚 25+ Advanced Data Structure Programs
- 💻 Interactive code viewer with syntax highlighting
- 🧠 Algorithm section for every program
- 🔍 Search by:
  - Question text
  - Question number (`1`, `2`, `12`)
  - Question ID (`Q1`, `Q2`)
  - Category names
- 🏷️ Category-based filtering
- 📋 Copy code and algorithms to clipboard
- ⌨️ Keyboard navigation support
  - `←` Previous question
  - `→` Next question
  - `Esc` Close modal
- 🖥️ VS Code inspired dual-panel code editor UI
- 📜 Independently scrollable:
  - Code section
  - Algorithm section
  - Main page
- 📱 Fully responsive design
- ⚡ Built with Vite for fast performance
- 🎨 Pure CSS Modules (No UI libraries)

---

# 🧠 Topics Covered

## Trees

- Threaded Binary Trees
  - Inorder
  - Preorder
  - Left / Right Threaded Trees

- AVL Trees
  - Insertions
  - Rotations
  - Traversals

- Red-Black Trees
  - Insertions
  - Menu-driven implementation

- B-Trees
  - Insert
  - Search
  - Traversal

- B+ Trees
  - Insert
  - Search

---

## Heap & Priority Queue

- Heap Sort
- Min Heap
- Max Heap
- Priority Queue

---

## Graph Algorithms

- Dijkstra’s Algorithm

---

## Advanced Structures

- Trie
- Suffix Tree
- Skip List
- Treap
- Quad Tree
- Interval Tree
- Segment Tree

---

# 🏗️ Project Structure

```bash
ADS-LAB-EXAM/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── CodeModal.jsx
│   │   ├── CodeModal.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── QuestionCard.jsx
│   │   └── QuestionCard.module.css
│   │
│   ├── data/
│   │   └── questions.js
│   │
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

# 🖼️ UI Architecture

## Main Components

### `Header`

Contains:
- Project branding
- Search bar
- Question counter
- Search reset functionality

---

### `QuestionCard`

Displays:
- Question number
- Category tag
- Question preview
- Hover interactions

---

### `CodeModal`

Main interactive editor window containing:
- Syntax highlighted C code
- Scrollable code editor
- Algorithm section
- Copy buttons
- Question navigation
- Keyboard shortcuts

---

### `Footer`

Contains:
- Branding
- Project footer details
- Animated gradient text

---

# ⚙️ Tech Stack

## Frontend

- React 18
- Vite

## Styling

- CSS Modules
- Pure CSS animations
- Responsive Flex/Grid layouts

## Fonts

- Inter
- JetBrains Mono
- Syne

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone <your-repo-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

---

## 4. Build for Production

```bash
npm run build
```

---

## 5. Preview Production Build

```bash
npm run preview
```

---

# 🌐 Deployment

## Deploy on Vercel

1. Push repository to GitHub
2. Open Vercel
3. Import repository
4. Deploy

Vercel automatically detects the Vite configuration.

---

# 🎯 Search System

The search system supports:

| Search Input | Result |
|---|---|
| `1` | Opens Question 1 |
| `Q2` | Finds Question 2 |
| `AVL` | AVL Tree Questions |
| `heap` | Heap Programs |
| `threaded` | Threaded BT Programs |

---

# ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `←` | Previous Question |
| `→` | Next Question |
| `Esc` | Close Modal |

---

# 📱 Responsive Design

The UI is optimized for:

- Desktop
- Tablets
- Mobile devices

Includes:
- Responsive grids
- Adaptive editor layout
- Mobile modal support
- Scrollable containers

---

# 🎨 Design Highlights

- IDE-inspired dark theme
- Glassmorphism modal effects
- Smooth hover animations
- Custom syntax highlighting
- Sticky header and filter bar
- Animated UI accents

---

# 📦 Future Improvements

- Line highlighting
- Dark/Light theme toggle
- Download code as `.c`
- Bookmark questions
- Favorite questions section
- Syntax themes
- Question difficulty badges

---

# 👨‍💻 Author

**M A R C O**

Built for Advanced Data Structures Lab Exam preparation using React and modern frontend UI principles.