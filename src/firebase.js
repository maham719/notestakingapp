// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCk2NfXP_zKieCCXaoB8ovrOH5UH_ZrI",
  authDomain: "studentportal-25c07.firebaseapp.com",
  projectId: "studentportal-25c07",
  storageBucket: "studentportal-25c07.firebasestorage.app",
  messagingSenderId: "556359252403",
  appId: "1:556359252403:web:c1e556f008c06345eff3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
