import React from "react";
import StyledTimerButton from "./styled";
const TimerButton = ({ index }) => {
  return (
    <div>
      <StyledTimerButton onClick={() => console.log("work button")}>
        {index}
      </StyledTimerButton>
    </div>
  );
};
export default TimerButton;
