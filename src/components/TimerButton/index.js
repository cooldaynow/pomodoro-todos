import React from "react";
import StyledTimerButton from "./styled";
const TimerButton = ({ enableTimer, id }) => {
  return (
    <div>
      <StyledTimerButton onClick={enableTimer}>{id}</StyledTimerButton>
    </div>
  );
};
export default TimerButton;
