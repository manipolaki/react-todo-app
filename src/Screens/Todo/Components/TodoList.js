import React from "react";
import TodoEditItem from "./TodoEditItem";
import TodoItem from "./TodoItem";

export default function (props) {
  const { todos } = props;
  const [state, setState] = React.useState({ editTodo: {} });
  const onUpdateTodo = (todo) => {
    props.updateTodo(todo);
    setState({ editTodo: {} });
  };
  return (
    <div className="list-container">
      <h2>Todo List</h2>
      <hr />
      <ul className="list-ul">
        {(todos || []).map((todo) => (
          <li key={todo.id} className="list-item">
            {todo.id === state.editTodo.id ? (
              <TodoEditItem
                {...props}
                todo={todo}
                updateTodo={onUpdateTodo}
                cancelTodo={() => setState({ editTodo: {} })}
              />
            ) : (
              <TodoItem
                {...props}
                todo={todo}
                editTodo={(todo) => setState({ editTodo: todo })}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
