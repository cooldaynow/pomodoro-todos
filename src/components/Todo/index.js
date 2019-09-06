import React from "react";
import { Text, TodoCloser } from "./styled";
import TimerButton from "../TimerButton/index";

const Todo = ({
  text,
  index,
  time,
  switchTask,
  deleteTask,
  className
}) => {
  return (
    <div className={className}>
      <TimerButton index={index} />
      <Text onDoubleClick={() => switchTask(index)}>{text}</Text>
      <TodoCloser onClick={() => deleteTask(index)} />
    </div>
  );
};

export default Todo;
