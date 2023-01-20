import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todoItems, setTodoItems] = useState([
    { taskName: "Sleep well" },
    { taskName: "Drink water" },
  ]);
  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" placeholder="Enter the task" />
      <button type="submit">Add</button>
      <br></br>
      <div>
        {todoItems.map(({taskName})=>{
            return <TodoItem taskName={taskName}/>
        })}
      </div>

    </div>
  );
}

export default Todo;
