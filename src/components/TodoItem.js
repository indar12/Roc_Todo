import React from "react";

function TodoItem({itemOne}) {
  return (
    <div className="TodoItems">
      <li>{itemOne}</li>
      <li>Exercise daily</li>
    </div>
  );
}

export default TodoItem;
