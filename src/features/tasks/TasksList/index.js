import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTasks, toggleTaskDone } from "../taskSlice";
import { Button, Item, List, TaskItem } from "./styled";

const TasksList = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();


    return(
    <List>
        {tasks.map((task) => ( 
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button done
                    onClick={() => dispatch(toggleTaskDone(task.id))}>
                    {task.done ? "✔️" : ""}
                </Button>
                <TaskItem done={task.done}>
                    {task.content}
                </TaskItem>
                <Button remove
                    onClick={() => dispatch(removeTask(task.id))}>
                    🗑</Button>
            </Item>
        ))}
    </List>
);}
export default TasksList;