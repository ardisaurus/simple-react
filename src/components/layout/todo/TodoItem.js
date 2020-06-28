import React from "react";
import "../../../App.css";

export default function TodoItem({ item, onDeleteClick, onMarkComplete }) {
  const getStyle = () => {
    return {
      background: item.completed ? "#a7ffeb" : "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: item.completed ? "line-through" : "none",
    };
  };
  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            onMarkComplete(item.id);
          }}
        />
        {item.title}
        <button onClick={() => onDeleteClick(item.id)} className="delete-btn">
          x
        </button>
      </p>
    </div>
  );
}
