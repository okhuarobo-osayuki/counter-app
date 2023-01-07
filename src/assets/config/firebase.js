import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA-Z05QpISbCGY9D2cKljDfJi50o8GqPzY",
  authDomain: "counter-app-development.firebaseapp.com",
  projectId: "counter-app-development",
  storageBucket: "counter-app-development.appspot.com",
  messagingSenderId: "669970570923",
  appId: "1:669970570923:web:284d346fec94217842a1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication instance
export const auth = getAuth(app);