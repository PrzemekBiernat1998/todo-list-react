
import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectEveryTasksIsDone, selectHideDone, selectTasksAreEmpty, toggleHideDone, setAllDone } from "../taskSlice";

const Buttons = () =>{
    
const taskAreEmpty = useSelector(selectTasksAreEmpty);
const everyTaskIsDone = useSelector(selectEveryTasksIsDone);
const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();


    return(
        <Container>
            { taskAreEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}> {hideDone ? "Pokaż " : "Ukryj "
                    }ukończone</Button>
                    <Button
                        onClick={setAllDone}
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