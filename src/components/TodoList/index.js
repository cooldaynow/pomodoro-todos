import React from "react";
import Todo from "../../containers/Todo";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo, i) => (
        <Todo
          index={i}
          id={todo.id}
          key={`Todo ${i + Math.floor(Math.random())}`}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </>
  );
};

export default TodoList;
