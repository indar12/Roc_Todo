import React from "react";

function TodoItem({ id, taskName, deleteFunc}) {
  return (
    <div className="TodoItems">
      <li>
        {taskName}
        <button
          onClick={() => {
            deleteFunc(id);
            console.log("delete", id);
          }}
        >
          delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
