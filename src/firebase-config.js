import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmqU1MH-M03GBKRUTeeYOFjUoRmXWusEA",
    authDomain: "blog-project-firebase-15b0b.firebaseapp.com",
    projectId: "blog-project-firebase-15b0b",
    storageBucket: "blog-project-firebase-15b0b.appspot.com",
    messagingSenderId: "514863202523",
    appId: "1:514863202523:web:88498ebd7e41f521554cfe"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

