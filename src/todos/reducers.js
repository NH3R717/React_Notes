// ! reducer – function named after which ever resource in the redux store it is in charge of managing
// ! two arguments – current state resource and action
// ! take the current state and action triggered and decide what changes need to happen, return results and redux takes results and updates application state

import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  markTodoAsCompleted,
} from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  // ! switch block
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
