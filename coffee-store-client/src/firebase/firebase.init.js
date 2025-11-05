// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjJ4oE_4AyirQEXGIlFcJoRmXb3xxAs5k",
  authDomain: "coffee-store-app-1ed4a.firebaseapp.com",
  projectId: "coffee-store-app-1ed4a",
  storageBucket: "coffee-store-app-1ed4a.firebasestorage.app",
  messagingSenderId: "571079139361",
  appId: "1:571079139361:web:dab18c6b661c4f61204360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);