import { songWatcherSaga, userWatcherSaga} from "./sagas/userWatcherSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        userWatcherSaga(),
        songWatcherSaga()
    ])
}
