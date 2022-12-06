import React from "react";
import "./style.css"

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
            className={`<li className="list__task${task.done && hideDone ? " tasks__list--hidden" : ""
        }`}>
               <button className="list__taskButton"
               onClick={()=> toggleTaskDone(task.id)}>
                {task.done ? "✔️" : ""}
            </button>
            <span className={`${task.done ? " list__taskItem--done" : ""}`}>
                {task.content}
            </span>
            <button className="list__taskButton list__taskButton--remove" 
            onClick={() => removeTask(task.id)}>
                🗑</button>
        </li>
        ))}
    </ul>
); 
export default Tasks;