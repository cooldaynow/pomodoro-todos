import React from "react";
import { connect } from "react-redux";
import { switchTask, deleteTask } from "../../actions";
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
const FilteredTodos = ({ todos, switchTask, deleteTask }) => (
  <TodoList
    switchTask={switchTask}
    todos={todos}
    deleteTask={deleteTask}
  />
);

const mapStateToProps = ({ visibleFilter, todos }) => ({
  todos: getFilteredTodos(visibleFilter, todos)
});
const mapDispatchToProps = dispatch => {
  return {
    switchTask: index => dispatch(switchTask(index)),
    deleteTask: index => dispatch(deleteTask(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredTodos);
