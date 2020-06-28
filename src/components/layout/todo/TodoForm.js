import React, { useState } from "react";
import "../../../App.css";

export default function TodoForm({ onAddTodo }) {
  const [formValue, setFormValue] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTodo(formValue);
          setFormValue("");
        }}
        style={{ display: "flex" }}
      >
        <input
          type="text"
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          value={formValue}
          style={{ flex: "10", padding: "5px" }}
        ></input>
        <input type="submit" value="Add" className="btn" style={{ flex: 1 }} />
      </form>
    </div>
  );
}
