import React from "react";
import { Text, TodoCloser, TodoWrap } from "./styled";
import TimerButton from "../../components/TimerButton";
import {
  switchTask,
  deleteTask,
  showTime,
  updateTimer,
  stopTimer
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = ({ text, index, completed, id }) => {
  const dispatch = useDispatch();
  let {
    session: {
      mins,
      type,
      secs,
      pause,
      sessionTime,
      isSwitchTimer,
      timerId,
      isTimerOn
    },
    session
  } = useSelector(state => ({
    session: state.todos[index].session
  }));

  const calcTimer = () => {
    const timerId = setInterval(() => {
      if (mins === 0 && secs === 0) {
        isSwitchTimer = !isSwitchTimer;
        type = isSwitchTimer ? "BREAK" : "SESSION";
        mins = isSwitchTimer ? pause : sessionTime;
      } else {
        if (secs === 0) {
          mins--;
          secs = 59;
        } else {
          secs--;
        }
      }
      let newSession = {
        ...session,
        isSwitchTimer,
        mins,
        secs,
        type,
        //     isTimerOn: true,
        timerId
      };
      dispatch(updateTimer(id, newSession));
      console.log(newSession);
    }, 1000);

    //console.log("timerId", timerId);
  };

  const enableTimer = () => {
    if (isTimerOn === true) {
      dispatch(stopTimer(id));
      clearTimeout(timerId);
      console.log("stop todo", timerId);
    }
    if (isTimerOn === false) {
      //dispatch(startTimer(id));
      console.log("timer start", console.log(isTimerOn));
      calcTimer();
    }
  };
  const deleteTodo = () => {
    clearTimeout(timerId);
    dispatch(deleteTask(index));
    console.log("delete todo", timerId);
  };

  return (
    <TodoWrap completed={completed}>
      <TimerButton
        id={id}
        enableTimer={enableTimer}
        isTimerOn={isTimerOn}
      />
      <Text
        onClick={() => dispatch(showTime(index))}
        onDoubleClick={() => dispatch(switchTask(id))}
      >
        {text}
      </Text>
      <TodoCloser onClick={deleteTodo} />
    </TodoWrap>
  );
};
export default Todo;
