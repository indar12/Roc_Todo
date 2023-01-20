import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, taskName: "Sleep well" },
    { id: 2, taskName: "Drink water" },
  ]);

  function deleteFunc(idToDelete){
    const newState = todoItems.filter(({id})=>{
       return id!==idToDelete;
    })
    setTodoItems(newState);
  }
  function editFunc(idToEdit,editedText){
    console.log("id",idToEdit);
    const newState = todoItems.map((todoItem)=>{
       if(todoItem.id===idToEdit)
       {
        return { ...todoItem,taskName: editedText}
       }
       return todoItem;
    })
    setTodoItems(newState);
  }
  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" placeholder="Enter the task" />
      <button type="submit">Add</button>
      <br></br>
      <div>
        {todoItems.map(({ id,taskName }) => {
          return <TodoItem id={id} taskName={taskName} deleteFunc={deleteFunc} editFunc={editFunc}/>;
        })}
      </div>
    </div>
  );
}

export default Todo;
