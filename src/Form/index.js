import React from "react";
import "./style.css";

const Form = (props) => (
<form className="form">
<input placeholder="Tutaj wpisz zadanie do zrobienia"
  className="form__input"
/>
<button className="form__button">Dodaj zadanie</button>
</form>
);
    
export default Form;