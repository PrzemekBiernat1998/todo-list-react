import React, { useRef, useState } from "react";
import { MainForm,
Button,
Input, } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
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
        value={newTaskContent}
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