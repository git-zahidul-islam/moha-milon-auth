// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkeLYhsca-2KVdscmdpy1wEE6SZ80sGec",
    authDomain: "maha-milon-auth.firebaseapp.com",
    projectId: "maha-milon-auth",
    storageBucket: "maha-milon-auth.appspot.com",
    messagingSenderId: "360284337200",
    appId: "1:360284337200:web:de5e09c69142a1ebaba9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
