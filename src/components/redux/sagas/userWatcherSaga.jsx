import { fetchSongSaga, fetchUserSaga } from "./userSaga";
import { takeLatest } from "redux-saga/effects";
import { fetchUserList} from "../slices/userSlice";
import { fetchSongList } from "../slices/songSlice";

export   function* userWatcherSaga(){
    yield takeLatest(fetchUserList.type, fetchUserSaga);
}


export function* songWatcherSaga(){
    yield takeLatest(fetchSongList.type, fetchSongSaga);
}