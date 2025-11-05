import { useTodos } from "../context/TodosContext";
import Filters from "./Filters";

export default function TodoFooter() {
  const { todos, dispatch } = useTodos();
  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <footer className="todo__footer">
      <p className="todo__count">{remaining} items left</p>
      <Filters />
      <button
        className="todo__clear"
        onClick={() => dispatch({ type: "clearCompleted" })}
      >
        Clear completed
      </button>
    </footer>
  );
}
