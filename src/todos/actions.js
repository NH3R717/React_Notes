// ! every action is json with a type property and payload

// ! actions types may be held in a single folder for larger projects (actionTypes.js)
export const CREATE_TODO = "CREATE_TODO";
// ! function is called "action creators"
export const createTodo = (text) => ({
  type: CREATE_TODO,
  // ! contains text of new ToDo
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});
