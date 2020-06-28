import React, { useState, useEffect } from "react";
import TodoTable from "../layout/todo/TodoTable";
import TodoForm from "../layout/todo/TodoForm";
import Axios from "axios";
// const uuid = require("uuid");

export default function Todo() {
  const [todoList, setTodoList] = useState([
    // { id: uuid.v4(), title: "Shopping", completed: false },
    // { id: uuid.v4(), title: "Cleaning", completed: true },
  ]);

  useEffect(() => {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => setTodoList(res.data));
  }, []);

  const handleAddTodo = (formValue) => {
    // const newValue = { id: uuid.v4(), title: formValue, completed: false };
    // setTodoList([...todoList, newValue]);
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: formValue,
      completed: false,
    }).then((res) => {
      setTodoList([res.data, ...todoList]);
    });
  };

  const handleMarkComplete = (id) => {
    const newTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(newTodo);
  };

  const handleDeleteClick = (id) => {
    // const newTodo = todoList.filter((item) => item.id !== id);
    // setTodoList(newTodo);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      setTodoList([...todoList.filter((todo) => todo.id !== id)])
    );
  };

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoTable
        todoList={todoList}
        onDeleteClick={handleDeleteClick}
        onMarkComplete={handleMarkComplete}
      />
    </div>
  );
}
