import styled from "styled-components";
import Todo from "./index.js";

export const StyledTodo = styled(Todo)`
  color: #000;
  text-decoration: ${({ completed }) => completed && "line-through"};
  margin: 10px 0;
  border: 1px solid grey;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  transition: all 0.2s linear;
  position: relative;
  &:hover {
    background-color: grey;
  }
`;
export const TodoCloser = styled.span`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  opacity: 1;
  background-color: silver;
  transition: all 0.2s linear;
  &::before,
  ::after {
    position: absolute;
    left: 10px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    background-color: tomato;
  }
`;
export const Text = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default StyledTodo;
