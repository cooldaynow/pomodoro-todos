import styled from "styled-components";
import AddTodo from ".";
export const Input = styled.input`
  width: 75%;
  height: 30px;
  padding: 5px 20px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
`;
export const AddButton = styled.button`
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
export const StyledAddTodo = styled(AddTodo)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export default StyledAddTodo;
