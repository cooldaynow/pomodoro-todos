import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import { Input, AddButton } from "./styled";

const AddTodo = ({ addTodo, className }) => {
  const [text, setText] = useState("");
  const addTask = () => {
    if (!text) {
      return;
    }
    addTodo(text);
    setText("");
  };
  return (
    <div className={className}>
      <Input
        placeholder="Add Task..."
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <AddButton onClick={addTask}>Add Todo</AddButton>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
