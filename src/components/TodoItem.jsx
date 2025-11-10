import { useRef } from "react";
import useTodos from "../hooks/useTodos";

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
    <div ref={ref} className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <button
        className="todo-check"
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
        aria-label="Mark complete"
      >
        {todo.completed && (
          <img src="/assets/icon-check.svg" alt="Complete task" />
        )}
      </button>
      <p className="todo-text">{todo.text}</p>
      <button
        className="todo-delete"
        aria-label="Delete task"
        onClick={handleDelete}
      >
        <img src="/assets/icon-cross.svg" alt="Delete task" />
      </button>
    </div>
  );
}
