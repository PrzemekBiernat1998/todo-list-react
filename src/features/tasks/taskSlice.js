import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice ({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex((task) => task.id === taskID);
            tasks[index].done = !tasks[index].done;
          },
          removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex((task) => task.id === taskID);
            tasks.splice(index, 1);
          },
    },
});

export const {
    addTask, 
    toggleHideDone,
    setAllDone,
    toggleTaskDone,
    removeTask,
} = taskSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectEveryTasksIsDone = (state) => selectTasks(state).every(({ done }) => done);

export default taskSlice.reducer;
  