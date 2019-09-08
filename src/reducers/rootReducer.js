const intialState = {
  visibleFilter: "SHOW_ALL",
  todos: [
    {
      text: "static todos none completed",
      completed: false,
      session: {
        mins: 1,
        secs: 0,
        sessionTime: 1,
        pause: 2,
        name: "SESSION",
        isSwitchTimer: false,
        isTimerOn: false
      },
      id: 0
    },
    {
      text: "static todos completed",
      completed: true,
      session: {
        mins: 1,
        secs: 0,
        sessionTime: 1,
        pause: 1,
        name: "SESSION",
        switchTimer: false,
        isTimerOn: false
      },
      id: 1
    }
  ],
  session: {
    mins: 1,
    secs: 0,
    sessionTime: 1,
    pause: 1,
    name: "SESSION",
    switchTimer: false,
    isTimerOn: false
  },

  indexTodo: 0
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
          {
            text: action.text,
            completed: false,
            id: action.id,
            session: state.session
          }
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
      //console.log("delete task", action.index);
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ],
        indexTodo: action.index - 1 < 0 ? 0 : action.index - 1
      };
    case "SHOW_TIME":
      return {
        ...state,
        indexTodo: action.index
      };
    case "UPDATE_TIMER":
      return {
        ...state,
        todos: state.todos.map(todo => {
          const { session } = action;
          if (todo.id === action.index) {
            return {
              ...todo,
              session
            };
          }
          return todo;
        })
      };
    case "STOP_TIMER":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              session: {
                ...todo.session,
                isTimerOn: false
              }
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};
export default rootReducer;
