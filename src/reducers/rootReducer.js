const intialState = {
  visibleFilter: "SHOW_ALL",
  todos: [
    {
      text: "static todos none completed",
      completed: false,
      time: 0
    },
    {
      text: "static todos completed",
      completed: true,
      time: 10
    }
  ],
  session: {
    name: "session",
    time: 5
  }
};
const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      //  console.log("action.filter: ", action.filter);
      return {
        ...state,
        visibleFilter: action.filter
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.text, completed: false }
        ]
      };
    case "SWITCH_TASK":
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case "DELETE_TASK":
      console.log("delete task");
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      };
    case "SHOW_TIME":
      return {
        ...state,
        sessionTime: action.time
      };

    default:
      return state;
  }
};
export default rootReducer;
