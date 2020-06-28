import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <div>
      <header className="menu-header">
        <h1>Todo List</h1>
        <Link to="/" className="menu-link">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about" className="menu-link">
          About
        </Link>
      </header>
    </div>
  );
}
