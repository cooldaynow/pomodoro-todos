import React from "react";
import { connect } from "react-redux";
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
const FilteredTodos = ({ todos }) => <TodoList todos={todos} />;

const mapStateToProps = ({ visibleFilter, todos }) => ({
  todos: getFilteredTodos(visibleFilter, todos)
});

export default connect(mapStateToProps)(FilteredTodos);
