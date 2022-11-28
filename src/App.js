import React from "react";
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

  const hideDones = false;

function App() {
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
    body={<Tasks tasks={tasks} hideDones={hideDones} />} 
    extraContainer={<Buttons tasks={tasks} hideDones={hideDones} />}
    />
    </Container>
    </body>
    );
}

export default App;
