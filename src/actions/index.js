import {
  SET_FILTER,
  ADD_TODO,
  SWITCH_TASK,
  DELETE_TASK,
  SHOW_TIME,
  STOP_TIMER,
  UPDATE_TIMER,
  START_TIMER,
  UPDATE_POMODOROS
} from "../constants";
import { idMaker } from "../utils";
const makeID = idMaker();

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
export const addTodo = text => {
  let id = makeID.next().value;
  return {
    type: ADD_TODO,
    text,
    id
  };
};
export const switchTask = id => ({
  type: SWITCH_TASK,
  id
});

export const deleteTask = index => ({
  type: DELETE_TASK,
  index
});
export const showTime = index => ({
  type: SHOW_TIME,
  index
});
export const updateTimer = (index, newSessionPart) => ({
  type: UPDATE_TIMER,
  index,
  newSessionPart
});
export const stopTimer = id => ({
  type: STOP_TIMER,
  id
});

export const startTimer = id => ({
  type: START_TIMER,
  id
});
export const updatePomodoros = id => ({
  type: UPDATE_POMODOROS,
  id
});
