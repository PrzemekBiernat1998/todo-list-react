import Buttons from "./TasksPage/Buttons";
import Form from "./TasksPage/Form";
import TasksList from "./TasksPage/TasksList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import ExampleTasksButton from "../tasks/TasksPage/ExampleTasksButton/exampleTaskButton";
import Search from "./TasksPage/Search";


function TasksPage() {

  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraContainer={<ExampleTasksButton />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search
           />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraContainer={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
