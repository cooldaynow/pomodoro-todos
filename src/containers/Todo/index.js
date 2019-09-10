import React from "react";
import { Text, TodoCloser, TodoWrap } from "./styled";
import TimerButton from "../../components/TimerButton";
import {
  switchTask,
  deleteTask,
  showTime,
  updateTimer,
  stopTimer,
  startTimer,
  updatePomodoros
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = ({ index }) => {
  const dispatch = useDispatch();
  let {
    todo: {
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
      text,
      completed,
      id
    },
    indexTodo
  } = useSelector(state => ({
    //session: state.todos[index].session,
    todo: state.todos[index],
    indexTodo: state.indexTodo
  }));

  const calcTimer = () => {
    const timerId = setInterval(() => {
      if (mins === 0 && secs === 0) {
        if (isSwitchTimer === true) {
          console.log("work");
          dispatch(updatePomodoros(id));
        }
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
      let newSessionPart = {
        isSwitchTimer,
        mins,
        secs,
        type,
        timerId
      };
      dispatch(updateTimer(id, newSessionPart));
      // console.log(newSession);
    }, 100);

    //console.log("timerId", timerId);
  };

  const enableTimer = () => {
    if (isTimerOn === true) {
      dispatch(stopTimer(id));
      clearTimeout(timerId);
      console.log("stop todo", timerId);
    }
    if (isTimerOn === false) {
      dispatch(startTimer(id));
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
    <TodoWrap
      completed={completed}
      index={index}
      indexTodo={indexTodo}
    >
      <TimerButton
        id={id}
        enableTimer={enableTimer}
        isTimerOn={isTimerOn}
        index={index}
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
