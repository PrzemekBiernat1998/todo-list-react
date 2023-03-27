import { nanoid } from "@reduxjs/toolkit";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { MainForm,
Button,
Input, } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimNewTaskContent = newTaskContent.trim();

    if (!trimNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: trimNewTaskContent,
      done : false,
      id: nanoid(),
      }));

    setNewTaskContent("")
    inputFocus(inputRef);
  };

  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  }
  
  return (
    <MainForm className="form" onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        placeholder="Tutaj wpisz zadanie do zrobienia"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
      onClick={ () => inputRef.current.focus()}>
        Dodaj zadanie</Button>
    </MainForm>
  )
};

export default Form;