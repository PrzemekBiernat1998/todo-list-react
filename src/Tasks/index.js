import React from "react";
import { Button, Item, List, TaskItem } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                className={`list__task ${task.done && hideDone ? " list__task--hidden" : ""
                    }`}>
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
export default Tasks;