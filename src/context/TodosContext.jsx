import { createContext, useReducer, useContext, useEffect } from "react";

const TodosContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all", // 'all' | 'active' | 'completed'
  theme: localStorage.getItem("theme") || "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.todo] };

    case "toggle":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };

    case "delete":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      };

    case "clearCompleted":
      return { ...state, todos: state.todos.filter((t) => !t.completed) };

    case "reorder": {
      const reordered = [...state.todos];
      const [removed] = reordered.splice(action.startIndex, 1);
      reordered.splice(action.endIndex, 0, removed);
      return { ...state, todos: reordered };
    }

    case "setFilter":
      return { ...state, filter: action.filter };

    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state.todos;
  }
}

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sync todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  useEffect(() => {
    document.body.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export const useTodos = () => useContext(TodosContext);
