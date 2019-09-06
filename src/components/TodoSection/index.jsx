import React from 'react'
import FilteredTodos from "../../containers/FilteredTodos";
import AddTodo from '../../containers/AddTodo';

const TodoSection = ({className}) => {
  return (
    <div className = {className}>
      <AddTodo />
      <FilteredTodos/>
    </div>
  )
}

export default TodoSection;
