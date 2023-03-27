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
        setAllDone: (state) => {
            state.tasks.forEach((task) => {
                task.done = true;
            });
        },
        toggleTaskDone: ({ tasks }, { payload: taskID}) => {
            const findId = tasks.findIndex((task) => task.id === taskID);
            tasks[findId].done = !tasks[findId].done;
        },
        removeTask: ( {tasks}, {payload: taskID}) => {
            const findId = tasks.findIndex( (task) => task.id === taskID);
            tasks.splice(findId, 1);
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
export const selectEveryTasksIsDone = (state) => selectTasksState(state).every(( {done} ) => done);
export const selectTasksAreEmpty = (state) => selectTasksState(state).lenght === 0;
export default taskSlice.reducer;
  