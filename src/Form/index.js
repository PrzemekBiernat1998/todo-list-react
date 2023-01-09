import React, { useRef, useState } from "react";
import { MainForm,
Button,
Input, } from "./styled";



const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  const inputRef = useRef(null);
  
  return (
    <MainForm className="form" onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Tutaj wpisz zadanie do zrobienia"
        className="form__input"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button className="form__button"
      onClick={ () => inputRef.current.focus()}>
        Dodaj zadanie</Button>
    </MainForm>
  )
};

export default Form;