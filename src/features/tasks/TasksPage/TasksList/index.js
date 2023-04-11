import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../taskSlice";
import { Button, Item, List, TaskItem } from "./styled";
import { Link, useLocation  } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";


const TasksList = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔️" : ""}
                    </Button>
                    <TaskItem done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                        </TaskItem>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};
export default TasksList;