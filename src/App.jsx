import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import TodoFooter from "./components/TodoFooter";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos } = useTodos();
  return (
    <div className="app">
      <div className="app-bg__image"></div>
      <header className="header">
        <h1 className="header-title">TODO</h1>
        <ThemeToggle />
      </header>

      <main className="todo">
        <TodoInput />
        {todos.length > 0 ? (
          <>
            <div className="todo-panel">
              <TodoList />
              <TodoFooter />
            </div>

            <p className="todo-hint">Drag & drop to reorder list</p>
          </>
        ) : (
          <p className="todo-empty">No task yet, add new one!</p>
        )}
      </main>
    </div>
  );
}

export default App;
