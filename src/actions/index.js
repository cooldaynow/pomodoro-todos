import {
  SET_FILTER,
  ADD_TODO,
  SWITCH_TASK,
  DELETE_TASK,
  SHOW_TIME,
  STOP_TIMER,
  UPDATE_TIMER,
  STOP_TEST
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
export const switchTask = index => ({
  type: SWITCH_TASK,
  index
});

export const deleteTask = index => ({
  type: DELETE_TASK,
  index
});
export const showTime = index => ({
  type: SHOW_TIME,
  index
});
export const updateTimer = (index, session) => ({
  type: UPDATE_TIMER,
  index,
  session
});
export const stopTimer = id => ({
  type: STOP_TIMER,
  id
});
