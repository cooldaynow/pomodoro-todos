import React from 'react'
import FilteredTodos from "../../containers/FilteredTodos";
import AddTodo from '../../containers/AddTodo';
import { WrapTodoSection } from './styled'

const TodoSection = () => {
  return (
    <WrapTodoSection>
      <AddTodo />
      <FilteredTodos/>
    </WrapTodoSection>
  )
}

export default TodoSection;
