import React from "react";

function TodoInput( {setTodoInput, addTask}) {
  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  };
  return (
    <div>
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="Enter the task"
          onChange={(e) => {
            setTodoInput({ id: 3, taskName: e.target.value });
          }}
        />
        <button type="submit" onClick={onSubmit}>Add</button>
      <br></br>
    </div>
  );
}

export default TodoInput;
