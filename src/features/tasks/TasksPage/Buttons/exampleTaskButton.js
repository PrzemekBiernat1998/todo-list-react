import { useDispatch } from "react-redux";
import { useState } from "react";
import { Container, Button } from "./styled";
import { fetchExampleTasks } from "../../taskSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
  
    const initialText = 'Pobierz przykładowe zadania';
    const [buttonText, setButtonText] = useState(initialText);
  
    const handleClick = () => {
      setButtonText('Ładowanie...');
  
      setTimeout(() => {
        setButtonText(initialText);
      }, 2000);
    }
  
    const handleFetchExampleTasks = () => {
      dispatch(fetchExampleTasks());
      handleClick();
    }
  
    return (
      <Container>
        <Button onClick={handleFetchExampleTasks}>
          {buttonText}
        </Button>
      </Container>
    );
  };
  

export default ExampleTasksButton;