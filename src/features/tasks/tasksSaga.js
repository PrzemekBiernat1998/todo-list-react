import { takeEvery, call , put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks} from "./taskSlice";

function* fetchExampleTasksHandler() {
    try {
       const exampleTasks = yield call(getExampleTasks);
       yield put(setTasks(exampleTasks));
    } catch(error) {
        yield call(alert, "Cos poszło nie tak");
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}