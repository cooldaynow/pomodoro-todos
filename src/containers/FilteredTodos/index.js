import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../../components/TodoList";

const getFilteredTodos = (filter, todos) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_UNFULFILLED":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
const FilteredTodos = () => {
  const { visibleFilter, todos } = useSelector(state => state);
  const filteredTodos = getFilteredTodos(visibleFilter, todos);
  console.log(filteredTodos);
  return <TodoList todos={filteredTodos} />;
};

export default FilteredTodos;
