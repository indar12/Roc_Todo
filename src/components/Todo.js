import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function Todo() {
    const [todoInput, setTodoInput] = useState({})
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
  function addTask(){
    if(todoInput!=="")
     setTodoItems([...todoItems,todoInput]);
  }
  return (
    <div>
      <TodoInput setTodoInput={setTodoInput} addTask={addTask}/>
      <div>
        {todoItems.map(({ id,taskName }) => {
            console.log("id",id);
            console.log("taskname",taskName);
          return <TodoItem id={id} taskName={taskName} deleteFunc={deleteFunc} editFunc={editFunc}/>;
        })}
      </div>
    </div>
  );
}

export default Todo;
