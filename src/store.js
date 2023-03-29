import { configureStore } from '@reduxjs/toolkit/dist';
import tasksReducer from './features/tasks/taskSlice';
import createSagaMiddleware from "redux-saga";
import { watchFetchExampleTasks } from './features/tasks/tasksSaga';


const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;