import React, {useState} from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
  const tasks=[
    {id: 1, content: "Zjesc obiad", done:false},
    {id: 1, content: "Zjesc bułke", done:true},
  ];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <body className="body">
    <Container className="container">
    <Header title="Lista zadań" />
    <Section 
    title="Dodaj nowe zadanie" 
    body={<Form />}
    />
    <Section 
    title="Lista zadań"
    body={<Tasks tasks={tasks} hideDone={hideDone} />} 
    extraContainer={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
    />
    </Container>
    </body>
    );
}

export default App;
