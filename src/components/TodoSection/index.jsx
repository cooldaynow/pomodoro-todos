import React from 'react'
import FilteredTodos from "../../containers/FilteredTodos";
import AddTodo from '../../containers/AddTodo';
import styled from "styled-components";

const TodoSection = ({className}) => {
  return (
    <div className = {className}>
      <AddTodo />
      <FilteredTodos/>
    </div>
  )
}
const StyledTodoSection = styled(TodoSection)`
  display: flex;
  height: 400px;
  width: 400px;
  padding:0 20px;
  flex-direction: column;
  background-color: tomato;
`;
export default StyledTodoSection;
