import React from "react";
import { Button, Item, List, TaskItem } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => ( 
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button done
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔️" : ""}
                </Button>
                <TaskItem done={task.done}>
                    {task.content}
                </TaskItem>
                <Button remove
                    onClick={() => removeTask(task.id)}>
                    🗑</Button>
            </Item>
        ))}
    </List>
);
export default TasksList;