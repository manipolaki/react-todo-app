import React from "react";

export default function (props) {
  const { todo, updateTodo, cancelTodo } = props;
  const [state, setState] = React.useState({ todo });
  const updateEl = React.useRef(null);
  //   React.useEffect(() => {
  //     if (Object.keys(state.todo).length && updateEl.current) {
  //       updateEl.current.focus();
  //     }
  //   }, [state.todo]);
  return (
    <>
      <input
        type="text"
        value={state.todo.value}
        ref={updateEl}
        onChange={(e) =>
          setState({
            ...state,
            todo: { ...todo, value: e.target.value },
          })
        }
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            updateTodo(state.todo);
          }
        }}
      />
      <div className="list-item-actions">
        <button onClick={cancelTodo}>cancel</button>
        <button
          onClick={() => {
            updateTodo(state.todo);
          }}
        >
          update
        </button>
      </div>
    </>
  );
}
