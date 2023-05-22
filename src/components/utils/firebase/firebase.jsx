// Import the functions you need from the SDKs you need

import  { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDVHqmSY_g3D7ejTvD02ocPVoYh-rt0C1w",

  authDomain: "tune-32543.firebaseapp.com",

  projectId: "tune-32543",

  storageBucket: "tune-32543.appspot.com",

  messagingSenderId: "1043168084868",

  appId: "1:1043168084868:web:a7789bb6f6ca5fcd0613d1"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);