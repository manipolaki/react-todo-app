import React from "react";

export default function (props) {
  const { todo, toggleClick, editTodo, deleteTodo } = props;
  return (
    <>
      <span
        className="list-item-text"
        onClick={() => toggleClick(todo.id)}
        style={{ textDecoration: todo.done && "line-through" }}
      >
        {todo.value}
      </span>
      <div className="list-item-actions">
        <button className="hover-btn" onClick={() => editTodo(todo)}>
          edit
        </button>
        <button className="hover-btn" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>
      </div>
    </>
  );
}
