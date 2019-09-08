import React from "react";
import styled from "styled-components";
import Todo from "../../containers/Todo";

const TodoList = ({ todos, switchTask, deleteTask, className }) => {
  return (
    <div className={className}>
      {todos.map((todo, i) => (
        <Todo
          index={i}
          id={todo.id}
          key={`Todo ${i + Math.floor(Math.random())}`}
          text={todo.text}
          session={todo.session}
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
