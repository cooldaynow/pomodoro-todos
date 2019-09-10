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
        pause: 1,
        type: "SESSION",
        isSwitchTimer: false,
        isTimerOn: false,
        pomodoros: 10
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
        type: "SESSION",
        switchTimer: false,
        isTimerOn: false,
        pomodoros: 0
      },
      id: 1
    }
  ],
  session: {
    mins: 1,
    secs: 0,
    sessionTime: 1,
    pause: 1,
    type: "SESSION",
    switchTimer: false,
    isTimerOn: false,
    pomodoros: 0
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
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
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
        indexTodo:
          action.index - 1 < 0
            ? 0
            : action.index === state.todos.length - 1
            ? action.index - 1
            : action.index
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
          const {
            newSessionPart: {
              mins,
              isSwitchTimer,
              secs,
              type,
              timerId
            }
          } = action;
          if (todo.id === action.index) {
            return {
              ...todo,
              session: {
                ...todo.session,
                mins,
                isSwitchTimer,
                secs,
                type,
                timerId
              }
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
    case "START_TIMER":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              session: {
                ...todo.session,
                isTimerOn: true
              }
            };
          }
          return todo;
        })
      };
    case "UPDATE_POMODOROS":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              session: {
                ...todo.session,
                pomodoros: todo.session.pomodoros + 1
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
