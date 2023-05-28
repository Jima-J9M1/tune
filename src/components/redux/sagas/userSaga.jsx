import { fetchUserFailer,fetchUserSuccess} from "../slices/userSlice";
import {firestore } from '../../utils/firebase/firebase'
import {call, put} from 'redux-saga/effects';
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { fetchSongFailer, fetchSongSuccess } from "../slices/songSlice";

export function* fetchUserSaga (){
    try{
        // yield put(fetchUserList(true));

        console.log("here")

        const userCollectionRef = collection(firestore, 'users');
        const snapshot = yield call(getDocs, userCollectionRef);
        console.log(snapshot)
        const users = snapshot.docs.map(doc => doc.data());
        yield put(fetchUserSuccess(users));

    }catch(error){
        yield put(fetchUserFailer(error.message))
    }

}


export function* fetchSongSaga (){
    try{
        console.log("true");
        const songCollectionRef = collection(firestore, 'song');
        const orederByQuery = query(songCollectionRef, orderBy('timeStampField','desc'), limit(5))
        const snapshot = yield call(getDocs, orederByQuery);
        // console
        const songs = snapshot.docs.map(doc =>({
            id:doc.id,
             ...doc.data()
            }));
        console.log(songs)
        yield put(fetchSongSuccess(songs));

    }catch(error){
        yield put(fetchSongFailer(error.message))
    }
}


