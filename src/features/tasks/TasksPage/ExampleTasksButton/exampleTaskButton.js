import { useDispatch, useSelector } from "react-redux";
import { Container} from "../../TasksPage/Buttons/styled";
import { Button } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../taskSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
  
    const loading = useSelector(selectLoading);
  
    return (
      <Container>
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
              loading
              ?"Ładowanie..."
              : "Pobierz przykładowe zadania"
            }
        </Button>
      </Container>
    );
  };
  

export default ExampleTasksButton;