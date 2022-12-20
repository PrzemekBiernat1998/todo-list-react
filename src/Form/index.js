import React, { useRef, useState } from "react";
import "./style.css";



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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Tutaj wpisz zadanie do zrobienia"
        className="form__input"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button"
      onClick={ () => inputRef.current.focus()}>
        Dodaj zadanie</button>
    </form>
  )
};

export default Form;