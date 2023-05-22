import { fetchUserFailer,fetchUserSuccess,fetchUserList} from "../slices/userSlice";
import {firestore } from '../../utils/firebase/firebase'
import {call, put} from 'redux-saga/effects';
import { collection, getDocs } from "firebase/firestore";

export function* fetchUserSaga (){
    try{
        yield put(fetchUserList(true));
        console.log("true");
        const userCollectionRef = collection(firestore, 'users');
        const snapshot = yield call(getDocs, userCollectionRef);
        const users = snapshot.docs.map(doc => doc.data());
        console.log(users);
        yield put(fetchUserSuccess(users));

    }catch(error){
        yield put(fetchUserFailer(error.message))
    }

}

