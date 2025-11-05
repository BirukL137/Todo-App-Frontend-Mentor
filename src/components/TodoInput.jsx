import { useState } from "react";
import { useTodos } from "../context/TodosContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;

    dispatch({
      type: "add",
      todo: {
        id: crypto.randomUUID(),
        text: t,
        completed: false,
      },
    });

    setText("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <span className="todo-input__check-ring"></span>
      <input
        className="todo-input__field"
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Create a new todo"
      />
    </form>
  );
}
