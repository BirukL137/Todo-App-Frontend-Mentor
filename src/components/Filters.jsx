import { useTodos } from "../context/TodosContext";

export default function Filters() {
  const { filter, dispatch } = useTodos();

  const set = (value) => dispatch({ type: "setFilter", filter: value });

  return (
    <div className="filters">
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
  );
}
