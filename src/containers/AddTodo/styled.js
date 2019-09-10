import styled from "styled-components";
export const Input = styled.input`
  width: 75%;
  height: 30px;
  padding: 5px 20px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  &:active,
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 2pt lightblue;
  }
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
  &:active,
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 2pt lightblue;
  }
`;
export const WrapAddTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;
