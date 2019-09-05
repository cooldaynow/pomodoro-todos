const SET_FILTER = "SET_FILTER";
const ADD_TODO = "ADD_TODO";
const DELETE_TASK = "DELETE_TASK";
const SWITCH_TASK = "SWITCH_TASK";

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
export const addTodo = text => ({
  type: ADD_TODO,
  text
});
export const switchTask = index => ({
  type: SWITCH_TASK,
  index
});

export const deleteTask = index => ({
  type: DELETE_TASK,
  index
});
