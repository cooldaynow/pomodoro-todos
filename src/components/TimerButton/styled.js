import styled from "styled-components";
const StyledTimerButton = styled.button`
  background-color: ${({ isTimerOn }) =>
    isTimerOn ? "red" : "green"};
  cursor: pointer;
  color: white;
`;
export default StyledTimerButton;
