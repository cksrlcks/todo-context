import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../context/TodoContext";
import styled from "styled-components";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <TodoBody>
      {!todos.length ? (
        <p className="nodata">
          <span role="img" aria-label="nodata">
            🤭
          </span>
          <span className="text">There's nothing to do.</span>
        </p>
      ) : (
        <div>
          <p className="info">You can modify item by clicking the title.</p>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      )}
    </TodoBody>
  );
};

export default TodoList;

const TodoBody = styled.div`
  padding: 0 0.5em;
  @media screen and (max-width: 425px) {
    font-size: 0.8em;
  }
  .info {
    opacity: 0.8;
    margin-bottom: 2em;
  }
  .nodata {
    text-align: center;
    padding: 4em 0;
    span {
      opacity: 1;
      display: block;
      font-size: 2em;
      margin-bottom: 0.5em;
    }
    .text {
      font-size: 1em;
      opacity: 0.5;
    }
  }
`;
