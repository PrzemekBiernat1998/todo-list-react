import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useTasks } from "./useTasks"




function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hidenDone => !hidenDone);
  };

  const{
    tasks,
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask
  } = useTasks();

  return (
    <body className="body">
      <Container className="container">
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
          extraContainer={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
        />
      </Container>
    </body>
  );
}

export default App;
