import React from "react";

export default function (props) {
  const [todo, setTodo] = React.useState("");
  const inputEl = React.createRef();
  return (
    <>
      <input
        type="text"
        placeholder="Enter todo name"
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.addTodo(todo);
          }
        }}
        value={todo}
        ref={inputEl}
      />
      <button
        onClick={() => {
          props.addTodo(todo);
          setTodo("");
          inputEl.current.focus();
        }}
      >
        Add
      </button>
    </>
  );
}
