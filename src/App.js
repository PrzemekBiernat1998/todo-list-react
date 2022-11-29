import React, {useState} from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
  



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {id: 1, content: "Zjesc obiad", done:false},
    {id: 2, content: "Zjesc bułke", done:true},
  ])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  
  const toggleTaskDone = (id) => {
    setTasks(tasks =>tasks.map(task => {
      if(task.id === id){
        return { ...task, done: !task.done};
      }
      return task;
    }))
  }

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
    body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />} 
    extraContainer={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
    />
    </Container>
    </body>
    );
}

export default App;
