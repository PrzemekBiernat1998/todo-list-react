import { configureStore } from '@reduxjs/toolkit/dist';
import tasksReducer from './features/tasks/taskSlice';
import createSagaMiddleware from "redux-saga";
import { tasksSaga } from './features/tasks/tasksSaga';


const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export default store;