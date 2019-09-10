import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions";
import { Input, AddButton, WrapAddTodo } from "./styled";

const AddTodo = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    setText("");
    if (!text || todos.length > 10) {
      return;
    }
    dispatch(addTodo(text));
  };
  return (
    <WrapAddTodo>
      <Input
        placeholder="Add Task..."
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <AddButton onClick={addTask}>Add Todo</AddButton>
    </WrapAddTodo>
  );
};

export default AddTodo;
