// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gwum-8df60.firebaseapp.com",
  projectId: "gwum-8df60",
  storageBucket: "gwum-8df60.appspot.com",
  messagingSenderId: "656257337883",
  appId: "1:656257337883:web:7bba306ef3d5e322cac6be",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
    