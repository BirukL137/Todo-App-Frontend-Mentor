import useTodos from "../hooks/useTodos";

export default function TodoFooter() {
  const { todos, filter, dispatch } = useTodos();

  const remaining = todos.filter((t) => !t.completed).length;

  const set = (value) => dispatch({ type: "setFilter", filter: value });

  return (
    <>
      <div className="todo-footer">
        <p className="todo-count">{remaining} items left</p>

        <div className="todo-filters desktop-only">
          <button
            onClick={() => set("all")}
            className={filter === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => set("active")}
            className={filter === "active" ? "active" : ""}
          >
            Active
          </button>
          <button
            onClick={() => set("completed")}
            className={filter === "completed" ? "active" : ""}
          >
            Completed
          </button>
        </div>

        <button
          className="todo-clear"
          onClick={() => dispatch({ type: "clearCompleted" })}
        >
          Clear Completed
        </button>
      </div>

      <div className="todo-filters mobile-only">
        <button
          onClick={() => set("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => set("active")}
          className={filter === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => set("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
    </>
  );
}
