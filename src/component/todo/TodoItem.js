import React, { useContext, useRef } from "react";
import { TodoContext } from "../../context/TodoContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
  const itemElement = useRef();
  const { removeTodo, updateTodo, toggleTodo } = useContext(TodoContext);
  const removeItem = () => {
    removeTodo(todo.id);
  };
  const updateItem = (e) => {
    updateTodo(todo.id, e.target.innerText);
  };
  const doneCheck = () => {
    const done = todo.done;
    toggleTodo(todo.id, done);
  };

  const focusItem = () => {
    placeCaretAtEnd(itemElement.current);
  };

  /* focus contenteditable 커서 이동 */
  function placeCaretAtEnd(el) {
    el.focus();
    if (
      typeof window.getSelection != "undefined" &&
      typeof document.createRange != "undefined"
    ) {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }

  return (
    <TodoItemBlock className={todo.done && "done"}>
      <button onClick={doneCheck} className="check">
        {todo.done ? (
          <FontAwesomeIcon icon={faCheckSquare} />
        ) : (
          <FontAwesomeIcon icon={faSquare} />
        )}
      </button>
      <div
        contentEditable
        onBlur={updateItem}
        className="item"
        ref={itemElement}
        suppressContentEditableWarning={true}
      >
        {todo.item}
      </div>
      <button onClick={focusItem} className="modify">
        <FontAwesomeIcon icon={faPen} />
      </button>
      <button onClick={removeItem} className="remove">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </TodoItemBlock>
  );
};

export default TodoItem;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  &.done {
    .item {
      opacity: 00.5;
      text-decoration: line-through;
    }
    .check {
      opacity: 1;
    }
  }
  .item {
    flex-grow: 1;
    font-size: 1.2em;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  button {
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .check {
    display: block;
    width: 1em;
    height: 1em;
    margin-right: 1em;
    opacity: 0.5;
    position: relative;
  }
  .remove,
  .modify {
    opacity: 0.2;
    transition: opacity 0.2s;
    margin-left: 1.5em;
    &:hover {
      opacity: 1;
    }
  }
`;
