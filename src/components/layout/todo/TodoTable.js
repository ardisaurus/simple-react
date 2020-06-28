import React from "react";
import TodoItem from "./TodoItem";

export default function TodoTable({ todoList, onDeleteClick, onMarkComplete }) {
  return (
    <div>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDeleteClick={onDeleteClick}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </div>
  );
}
