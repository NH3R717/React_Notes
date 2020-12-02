// ! useState –a hook that connects react to state
import React, { useState } from "react";
// ! higher order f
unction – connects a React component to a Redux store
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";
// ! mapStateToProps – removes data from state object that is relevant to current component and maps to the component's props
// ! mapDispatchToProps – takes dispatch and maps to component's props
// ! dispatch – function that allow components to trigger actions that redux store can respond to 
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='Type your new todo here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
              onClick={() => {
                //   ! checks if a todo entered is a duplicate
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className='new-todo-button'>
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
