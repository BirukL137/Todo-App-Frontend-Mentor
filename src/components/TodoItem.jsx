import { useRef } from "react";
import { useTodos } from "../context/TodosContext";

export default function TodoItem({ todo }) {
  const { dispatch } = useTodos();
  const ref = useRef();

  const handleDelete = () => {
    const el = ref.current;
    el.classList.add("removing");
    setTimeout(() => {
      dispatch({ type: "delete", id: todo.id });
    }, 220); // match animation duration
  };

  return (
    <div ref={ref} className="todo-item" data-completed={todo.completed}>
      <button
        className="todo-item__circle"
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
      ></button>
      <p
        className={`todo-item__text ${
          todo.completed ? "todo-item__text--completed" : ""
        }`}
      >
        {todo.text}
      </p>
      <button
        className="todo-item__delete"
        aria-label="Delete task"
        onClick={handleDelete}
      >
        ×
      </button>
    </div>
  );
}
