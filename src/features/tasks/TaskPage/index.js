
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../taskSlice";


function TaskPage() {
    
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

  return (
    <Container className="container">
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie odnaleziono zadania"}
        body={
        <>
        <strong>Ukończono:</strong> { task.done ? "Tak" : "Nie"}
        </>}
      />
    </Container>
  );
}

export default TaskPage;

