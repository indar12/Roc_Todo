import React from "react";

function TodoItem({taskName}) {
  return (
    <div className="TodoItems">
      <li>{taskName}</li>
    </div>
  );
}

export default TodoItem;
