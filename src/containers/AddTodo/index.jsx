import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import { Input, AddButton, WrapAddTodo } from "./styled";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    if (!text) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
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
