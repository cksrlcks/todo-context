import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  const addTodo = (value) => {
    setTodos([...todos, { id: uuidv4(), item: value, done: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, value) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id: id, item: value, done: todo.done } : todo
    );
    setTodos(newTodos);
  };

  const toggleTodo = (id, done) => {
    if (done) {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { id: id, item: todo.item, done: false } : todo
      );
      setTodos(newTodos);
    } else {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { id: id, item: todo.item, done: true } : todo
      );
      setTodos(newTodos);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
