
import { takeEvery, call , put, delay, takeLatest, select } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setTasks} from "./taskSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay (2000);

       const exampleTasks = yield call(getExampleTasks);
       yield put(setTasks(exampleTasks));
    } catch(error) {
        yield call(alert, "Cos poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler(){
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
