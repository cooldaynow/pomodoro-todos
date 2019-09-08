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
import { connect } from "react-redux";

const Todo = ({
  text,
  index,
  completed,
  id,
  session,
  switchTask,
  deleteTask,
  showTime,
  updateTimer,
  stopTimer,
  todos
}) => {
  const enableTimer = () => {
    let {
      name,
      mins,
      secs,
      pause,
      sessionTime,
      isTimerOn,
      isSwitchTimer,
      timerId: timerIdTodo
    } = session;

    if (isTimerOn === false) {
      const timerId = setInterval(() => {
        if (mins === 0 && secs === 0) {
          isSwitchTimer = !isSwitchTimer;
          name = isSwitchTimer ? "BREAK" : "SESSION";
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
          name,
          isTimerOn: true,
          timerId
        };
        updateTimer(id, newSession);
      }, 100);
      console.log("enable timer", timerId);
    }
    if (isTimerOn === true) {
      stopTimer(id);
      clearTimeout(timerIdTodo);
    }
  };
  const deleteTodo = index => {
    const { timerId: timerIdTodo } = todos[index].session;
    clearTimeout(timerIdTodo);
    deleteTask(index);
    console.log("delete todo", timerIdTodo);
  };

  return (
    <TodoWrap completed={completed}>
      <TimerButton id={id} enableTimer={enableTimer} />
      <Text
        onClick={() => showTime(index)}
        onDoubleClick={() => switchTask(index)}
      >
        {text}
      </Text>
      <TodoCloser onClick={() => deleteTodo(index)} />
    </TodoWrap>
  );
};
const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    switchTask: index => dispatch(switchTask(index)),
    deleteTask: index => dispatch(deleteTask(index)),
    showTime: index => dispatch(showTime(index)),
    updateTimer: (index, session) => dispatch(updateTimer(index, session)),
    stopTimer: index => dispatch(stopTimer(index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
