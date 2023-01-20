import React from "react";

function TodoItem({ id, taskName, deleteFunc, editFunc }) {
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
        <button
          onClick={() => {
            editFunc(id, "edittext");
          }}
        >
          Edit
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
