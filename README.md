# Todo App — Frontend Mentor Challenge (React)

A clean, modern, and fully-interactive Todo application built from scratch using React.  
This project focuses on component architecture, state management, UI polish, accessibility, and user experience.  
Includes drag-and-drop reordering, theme toggle, filters, and persistent state.

---

## 🚀 Live Demo
**https://your-demo-link-here**  
(Replace with your deployed URL)

---

## 🧑‍💻 Tech Stack

| Area            | Choice                        | Reasoning |
|----------------|------------------------------|------------|
| Language        | JavaScript (ES6+)            | Modern & maintainable |
| Framework       | React + Hooks                | Component-based UI |
| State Mgmt      | React Context + Reducer      | Predictable and scalable state logic |
| Drag & Drop     | @hello-pangea/dnd            | Maintained successor to react-beautiful-dnd |
| Persistence     | localStorage                 | Saves user state automatically |
| Styling         | Custom CSS variables         | Light/Dark theme + clear maintainability |

---

## ✨ Features

- Add new todos
- Mark todos as completed
- Delete todos
- Clear all completed todos
- **Filter by:** All / Active / Completed
- **Reorder todos** via drag-and-drop
- **Persistent state** (survives refresh)
- **Light / Dark theme toggle**
- **Polished animations** for add/remove interactions
- Fully responsive layout

---

## 🎨 Screenshots

| Light Mode | Dark Mode |
|-----------|-----------|
| *(add screenshot)* | *(add screenshot)* |

| Drag & Drop | Filters |
|-------------|---------|
| *(add screenshot)* | *(add screenshot)* |

> You can capture these using your browser’s built-in screenshot or `Ctrl+Shift+S` region capture.

---

## 🧱 Project Structure

src
├── components
│ ├── TodoFooter.jsx
│ ├── TodoInput.jsx
│ ├── TodoItem.jsx
│ ├── TodoList.jsx
│ └── ThemeToggle.jsx
├── context
│ └── TodosContext.jsx
├── hooks
│ └── useTodos.jsx
├── styles
│ ├── base.css
│ ├── components.css
│ └── layout.css
└── App.jsx


- **Logical separation of UI + state** improves readability and scalability.
- `TodosContext` centralizes app behavior and ensures consistent UI updates.

---

## 🧠 State Logic (Reducer Patterns)

The reducer defines clear, predictable actions:

add → add new todo
toggle → mark todo complete / active
delete → remove a todo
clearCompleted→ remove all completed todos
setFilter → switch between All / Active / Completed
reorder → drag & drop list rearranging
toggleTheme → switch light / dark mode


This ensures the UI is always a **pure function of state** → easy to debug, scale, and test.

---

## 🎛️ Drag & Drop Implementation

Reorder behavior is powered by:

```js
dispatch({
  type: "reorder",
  startIndex: result.source.index,
  endIndex: result.destination.index,
});

This provides:

- Natural movement

- Full accessibility support

- Smooth UX

- State persistence

---

💡 What I Learned

- How to design and structure a React app without external UI frameworks

- How to use Context + useReducer for clean and predictable state management

- How to implement drag-and-drop reordering in React applications

- Theme architecture using CSS variables + DOM attributes

- UI polish techniques (hover states, animations, spacing scale)

🏁 Running Locally

git clone https://github.com/BirukL137/todo-app-frontend-mentor.git
cd todo-app
npm install
npm run dev

---

✅ Status

Project: Completed
But room for enhancements like:

- Multi-theme packs

- Cloud sync / authentication

- Stats dashboard

---

📄 License

MIT License — free to use & modify.

---

⭐ If you found this project useful, consider giving it a star!