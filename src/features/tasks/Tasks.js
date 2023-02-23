import Buttons from "./Buttons";
import Form from "./Form";
import TasksList from "./TasksList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useState } from "react";
import { useTasks } from "../../useTasks"




function Tasks() {
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
      <Container className="container">
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
          extraContainer={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
        />
      </Container>
  );
}

export default Tasks;
