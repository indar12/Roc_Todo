import React from "react";
import TodoItem from "./TodoItem";

function Todo() {
  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" placeholder="Enter the task" />
      <button type="submit">Submit</button>
      <br></br>
      <TodoItem itemOne={"Sleep well"}/>
    </div>
  );
}

export default Todo;
