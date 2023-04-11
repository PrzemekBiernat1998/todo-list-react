
import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectEveryTasksIsDone, 
    selectHideDone, 
    toggleHideDone, 
    setAllDone, 
    selectTasks
} from "../../taskSlice";

const Buttons = () => {

    const tasks = useSelector(selectTasks);
    const everyTaskIsDone = useSelector(selectEveryTasksIsDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();


    return (
        <Container>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}> {hideDone ? "Pokaż " : "Ukryj "
                    }ukończone</Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={everyTaskIsDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    );
}
export default Buttons;
