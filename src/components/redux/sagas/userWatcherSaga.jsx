import { fetchUserSaga } from "./userSaga";
import { takeEvery } from "redux-saga/effects";
import { fetchUserList } from "../slices/userSlice";

export function* userWatcherSaga(){
    yield takeEvery(fetchUserList.type, fetchUserSaga);
    console.log(fetchUserList.type)
}


