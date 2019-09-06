import React from "react";
import styled from "styled-components";
import Todo from "../Todo/styled";

const TodoList = ({ todos, switchTask, deleteTask, className }) => {
  return (
    <div className={className}>
      {todos.map((todo, i) => (
        <Todo
          index={i}
          key={`Todo ${i}`}
          text={todo.text}
          time={todo.time}
          completed={todo.completed}
          switchTask={switchTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
const StyledTodoList = styled(TodoList)`
  // background-color: yellowgreen;
`;
export default StyledTodoList;
