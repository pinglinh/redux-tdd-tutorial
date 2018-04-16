import React, { Component } from "react";
import Navbar from "../common/Navbar";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <h2>TODO List</h2>
          <AddTodo />
          <TodoItem />
        </div>
      </div>
    );
  }
}

export default TodoApp;
