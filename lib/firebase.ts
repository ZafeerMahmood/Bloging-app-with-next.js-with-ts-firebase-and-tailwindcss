import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIkEY,
  authDomain: "blog-app-5a483.firebaseapp.com",
  projectId: "blog-app-5a483",
  storageBucket: "blog-app-5a483.appspot.com",
  messagingSenderId: "353236105742",
  appId: "1:353236105742:web:6d58bba9ac0f166ee19a5f",
  measurementId: "G-EXKFMXVJVK"
};
   

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();