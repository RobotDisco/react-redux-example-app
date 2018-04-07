import { combineReducers } from "redux";

const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      text: "Learn some JavaScript",
      completed: false
    },
    {
      id: 2,
      text: "Eat some lunch",
      completed: false
    },
    {
      id: 3,
      text: "Complete world domination",
      completed: false
    }
  ]
};

export const todos = (state = INITIAL_STATE.todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state; // fill out this reducer!
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default combineReducers({
  todos
});
