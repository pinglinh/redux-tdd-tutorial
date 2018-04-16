import React from "react";

const TodoItem = () => {
  return (
    <div className="item-box">
      <h2 className="pull-left">
        Item title
        <input type="checkbox" className="checkbox" />
      </h2>
    </div>
  );
};

export default TodoItem;
