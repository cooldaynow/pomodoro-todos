import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const Input = styled.input`
  width: 75%;
  height: 30px;
  padding: 5px 20px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
`;
const AddButton = styled.button`
  border-radius: 5px;
  margin: 5px;
  height: 30px;
  padding: 5px;
  background-color: grey;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
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
const StyledAddTodo = styled(AddTodo)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});
export default connect(
  null,
  mapDispatchToProps
)(StyledAddTodo);
