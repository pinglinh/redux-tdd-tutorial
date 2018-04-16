import React, { Component } from "react";

const AddTodo = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Add todo item" />
        <input type="submit" value="Add ToDo" />
      </form>
    </div>
  );
};

export default AddTodo;
