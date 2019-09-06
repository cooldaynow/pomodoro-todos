import styled from "styled-components";
import App from ".";

export const WrapApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 5px;
`;

export const WrapTodo = styled.div`
  display: flex;
  padding: 20px;
`;
export const StyledApp = styled(App)`
  width: 100%;
  height: 100vh;
  background-color: lightyellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default StyledApp;
