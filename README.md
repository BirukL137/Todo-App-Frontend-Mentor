# Modern Todo App — Frontend Mentor Challenge (React)

A clean, accessible, and themeable Todo application built with React.  
Features drag-and-drop reordering, light/dark mode, filtering, and persistent state storage.

## 🚀 Live Demo

- [Frontend Mentor](https://www.frontendmentor.io/solutions/todo-app)
- [Vercel](https://todo-app-frontend-mentor-lake.vercel.app/)

## 📸 Screenshot

![Todo App Screenshot](/public/screenshots/screenshot-desktop-dark.png) 

## 🧠 Features

- ✅ Add new todos
- ✏️ Mark todos as completed
- 🗑 Delete individual todos
- 🧹 Clear all completed todos
- 🎛 Filter by: **All**, **Active**, **Completed**
- 🌓 **Light / Dark** theme toggle (remembers user preference)
- 📱 Fully responsive:
  - One layout for **desktop**
  - Smart simplified layout for **mobile**
- 🖱 Smooth hover, focus and keyboard accessibility support
- 🎨🎛️ **Reorder todos** via drag-and-drop
- 🎨 **Polished animations** for add/remove interactions

## 🧑‍💻 Tech Stack

| Area            | Choice                        | Reasoning |
|----------------|------------------------------|------------|
| Language        | JavaScript (ES6+)            | Modern & maintainable |
| Framework       | React + Hooks                | Component-based UI |
| State Mgmt      | React Context + Reducer      | Predictable and scalable state logic |
| Drag & Drop     | @hello-pangea/dnd            | Maintained successor to react-beautiful-dnd |
| Persistence     | localStorage                 | Saves user state automatically |
| Styling         | Custom CSS variables         | Light/Dark theme + clear maintainability |

### 🧠 State Logic (Reducer Patterns)

The reducer defines clear, predictable actions:

- add → add new todo
- toggle → mark todo complete / active
- delete → remove a todo
- clearCompleted→ remove all completed todos
- setFilter → switch between All / Active / Completed
- reorder → drag & drop list rearranging
- toggleTheme → switch light / dark mode


This ensures the UI is always a **pure function of state** → easy to debug, scale, and test.

### 🎛️ Drag & Drop Implementation

Reorder behavior is powered by:

```js
dispatch({
  type: "reorder",
  startIndex: result.source.index,
  endIndex: result.destination.index,
});
```

This provides:

- Natural movement

- Full accessibility support

- Smooth UX

- State persistence

### What I Learned

- How to design and structure a React app without external UI frameworks

- How to use Context + useReducer for clean and predictable state management

- How to implement drag-and-drop reordering in React applications

- Theme architecture using CSS variables + DOM attributes

- UI polish techniques (hover states, animations, spacing scale)

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/BirukL137/Todo-App-Frontend-Mentor.git

cd Todo-App-Frontend-Mentor

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will start on http://localhost:5173

---

### Continued development

Project: Completed
But room for enhancements like:

- Multi-theme packs

- Cloud sync / authentication

- Stats dashboard

### Useful resources

- [React Docs – Managing State](https://react.dev/learn/managing-state) - Helped structure the todo state, updates, and list rendering.
- [CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Essential for building the light and dark theme system in a scalable way.
- [Beautiful and Accessible Drag and Drop with react-beautiful-dnd](https://egghead.io/lessons/react-course-introduction-beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd) - A maintained fork of react-beautiful-dnd, used here for smooth drag & drop reordering.
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Allows todos to persist across page refreshes.


## License

MIT License — free to use & modify.

## Author

- Frontend Mentor - [@BirukL137](https://www.frontendmentor.io/profile/BirukL137)
- GitHub - [@BirukL137](https://github.com/BirukL137/Todo-App-Frontend-Mentor/)

## Acknowledgments

Big thanks to Frontend Mentor for the challenge and the community for feedback 🙌

⭐ If you found this project useful, consider giving it a star!