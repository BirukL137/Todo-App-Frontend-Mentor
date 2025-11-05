import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import ThemeToggle from "./components/ThemeToggle";
import TodoFooter from "./components/TodoFooter";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">TODO</h1>
        <ThemeToggle />
      </header>

      <main className="todo">
        <TodoInput />
        <div className="todo__panel">
          <TodoList />
          <Filters />
          <TodoFooter />
        </div>

        <p className="todo__hint">Drag & drop to reorder list</p>
      </main>
    </div>
  );
}

export default App;
