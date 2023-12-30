// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNR81qcutOms0ij16xLMaFjVyJHUo71s0",
  authDomain: "login-a8068.firebaseapp.com",
  projectId: "login-a8068",
  storageBucket: "login-a8068.appspot.com",
  messagingSenderId: "137639123325",
  appId: "1:137639123325:web:a0d1dd127ac7e187935414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;