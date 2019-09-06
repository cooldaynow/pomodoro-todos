import React from "react";
import { Text, TodoCloser } from "./styled";

const Todo = ({ text, index, switchTask, deleteTask, className }) => {
  return (
    <div className={className}>
      <Text onClick={() => switchTask(index)}>{text}</Text>
      <TodoCloser onClick={() => deleteTask(index)} />
    </div>
  );
};

export default Todo;
