import React from "react";

function TodoInput( {setTodoInput, addTask}) {
  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
    setTodoInput({})
  };
  return (
    <div>
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="Enter the task"
          onChange={(e) => {
            setTodoInput({ id: Math.floor(Math.random()*100), taskName: e.target.value });
          }}
        />
        <button type="submit" onClick={onSubmit}>Add</button>
      <br></br>
    </div>
  );
}

export default TodoInput;
