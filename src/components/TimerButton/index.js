import React from "react";
import WrapTimerButton from "./styled";
const TimerButton = ({ index, enableTimer, isTimerOn }) => {
  return (
    <div>
      <WrapTimerButton isTimerOn={isTimerOn} onClick={enableTimer}>
        {index + 1}
      </WrapTimerButton>
    </div>
  );
};
export default TimerButton;
