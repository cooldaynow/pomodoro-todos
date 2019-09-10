import styled from "styled-components";

export const TodoWrap = styled.div`
  color: #000;
  text-decoration: ${({ completed }) => completed && "line-through"};
  margin: 2px 0;
  border: 1px solid grey;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ indexTodo, index }) =>
    index === indexTodo && "grey"};
  transition: all 0.1s linear;
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
  transition: all 0.1s linear;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
