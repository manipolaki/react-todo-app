import React from "react";
import "./TodoList.css";

export default function (props) {
  const { todos } = props;
  const [state, setState] = React.useState({ editTodo: {} });
  const updateEl = React.useRef(null);
  React.useEffect(() => {
    if (Object.keys(state.editTodo).length && updateEl.current) {
      updateEl.current.focus();
    }
  }, [state.editTodo]);
  return (
    <div className="list-container">
      <h2>Todo List</h2>
      <hr />
      <ul className="list-ul">
        {(todos || []).map((todo) => (
          <li key={todo.id} className="list-item">
            {todo.id !== state.editTodo.id ? (
              <span
                className="list-item-text"
                onClick={() => props.toggleClick(todo.id)}
                style={{ textDecoration: todo.done && "line-through" }}
              >
                {todo.value}
              </span>
            ) : (
              <input
                type="text"
                value={state.editTodo.value}
                ref={updateEl}
                onChange={(e) =>
                  setState({
                    ...state,
                    editTodo: { ...todo, value: e.target.value },
                  })
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    props.updateTodo(state.editTodo);
                    setState({ ...state, editTodo: {} });
                  }
                }}
              />
            )}
            <div className="list-item-actions">
              {todo.id === state.editTodo.id && (
                <button
                  onClick={() => {
                    props.updateTodo(state.editTodo);
                    setState({ ...state, editTodo: {} });
                  }}
                >
                  update
                </button>
              )}
              {todo.id !== state.editTodo.id && (
                <>
                  <button
                    className="hover-btn"
                    onClick={() => {
                      setState({ ...state, editTodo: todo });
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="hover-btn"
                    onClick={() => props.deleteTodo(todo.id)}
                  >
                    delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
