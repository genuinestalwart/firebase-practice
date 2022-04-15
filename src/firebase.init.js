import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcSprA5zYbwVDAFMjILG4NSsV8upSiRuM",
    authDomain: "gs-firebase-practice.firebaseapp.com",
    projectId: "gs-firebase-practice",
    storageBucket: "gs-firebase-practice.appspot.com",
    messagingSenderId: "637044095075",
    appId: "1:637044095075:web:b0c40c4bda9e18567fa056"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;