import React, { useState } from "react";
import StyledTimerButton from "./styled";
import { startTimer } from "../../actions";
import { useDispatch } from "react-redux";
const TimerButton = ({ enableTimer, id, isTimerOn }) => {
  const [buttonDelay, setButtonDelay] = useState(false);
  const dispatch = useDispatch();
  const enableTimerWithDelay = () => {
    dispatch(startTimer(id));
    setButtonDelay(true);
    setTimeout(() => {
      setButtonDelay(false);
    }, 1000);

    if (buttonDelay) {
      return;
    }
    enableTimer();
  };
  return (
    <div>
      <StyledTimerButton
        isTimerOn={isTimerOn}
        onClick={enableTimerWithDelay}
      >
        {id}
      </StyledTimerButton>
    </div>
  );
};
export default TimerButton;
