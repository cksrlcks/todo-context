import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const AddTodo = () => {
  const resetButton = useRef();
  const inputElement = useRef();
  const { addTodo } = useContext(TodoContext);

  const [value, setValue] = useState("");
  const [isWritting, setIsWritting] = useState(false);

  const handleInput = (e) => {
    setIsWritting(true);
    const targetValue = e.target.value;
    setValue(targetValue);
  };
  const enrollTodo = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    setIsWritting(false);
  };
  const handleBlur = (e) => {
    if (e.target.value.length > 0) {
    } else {
      setIsWritting(false);
    }
  };

  const resetValue = (e) => {
    e.preventDefault();
    setValue("");
    setIsWritting(false);
  };

  useEffect(() => {
    inputElement.current.focus();
  }, []);
  return (
    <>
      <FormBox onSubmit={enrollTodo}>
        <InputBox
          type="text"
          placeholder="Please enter a task."
          value={value}
          onChange={handleInput}
          maxLength="100"
          onBlur={handleBlur}
          ref={inputElement}
        />
        <ResetButton
          ref={resetButton}
          className={isWritting && "focus"}
          onClick={resetValue}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </ResetButton>
      </FormBox>
    </>
  );
};

export default AddTodo;
const FormBox = styled.form`
  position: relative;
  border-bottom: 1px solid #eee;
  margin-top: 2em;
  margin-bottom: 3em;
  @media screen and (max-width: 425px) {
    margin-top: 0;
    margin-bottom: 2em;
  }
`;

const InputBox = styled.input`
  display: block;
  height: 4em;
  font-size: 1.2em;
  padding: 0 0.5em;
  box-sizing: border-box;
  width: 100%;
  border: none;
  &::placeholder {
    opacity: 0.5;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
    font-size: 1em;
  }
`;

const ResetButton = styled.div`
  position: absolute;
  right: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s;
  cursor: pointer;
  &.focus {
    opacity: 1;
    visibility: visible;
  }
`;
