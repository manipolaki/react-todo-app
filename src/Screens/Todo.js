import React from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

export default function (props) {
  const [state, setState] = React.useState({ todos: [] });
  const onAddTodo = (todo) => {
    console.log("onAddTodo:", todo);
    if (!todo) {
      return;
    }
    setState({
      ...state,
      todos: [
        ...state.todos,
        { value: todo, id: new Date().getTime(), done: false },
      ],
    });
  };
  const onUpdateTodo = (todo) => {
    console.log("onUpdateTodo:", todo);
    setState({
      ...state,
      todos: state.todos.map((item) => (item.id === todo.id ? todo : item)),
    });
  };
  const onDeleteTodo = (id) => {
    console.log("onDeleteTodo:", id);
    setState({
      ...state,
      todos: state.todos.filter((item) => item.id !== id),
    });
  };
  const onToggleClick = (id) => {
    console.log("onToggleClick:", id);
    setState({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    });
  };
  return (
    <div>
      <TodoInput addTodo={onAddTodo} />
      <TodoList
        todos={state.todos}
        toggleClick={onToggleClick}
        updateTodo={onUpdateTodo}
        deleteTodo={onDeleteTodo}
      />
    </div>
  );
}
