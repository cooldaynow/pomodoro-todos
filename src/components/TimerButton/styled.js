import styled from "styled-components";
const WrapTimerButton = styled.button`
  background-color: ${({ isTimerOn }) =>
    isTimerOn ? "tomato" : "green"};
  cursor: pointer;
  color: white;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  &:hover {
    background-color: tomato;
  }
`;
export default WrapTimerButton;
