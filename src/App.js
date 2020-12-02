import React from "react";
// ! aleviates need for browser refresh when code changes are made and saved
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";
import "./App.css";

const App = () => (
  <div className='App'>
    <TodoList />
  </div>
);

export default hot(module)(App);
