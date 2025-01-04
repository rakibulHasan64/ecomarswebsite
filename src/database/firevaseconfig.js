// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcc0T0SQvO--eXPEi11C7DMD8C9AxOF_c",
  authDomain: "poject-one-102eb.firebaseapp.com",
  projectId: "poject-one-102eb",
  storageBucket: "poject-one-102eb.appspot.com",
  messagingSenderId: "99396578989",
  appId: "1:99396578989:web:715dda62c71864d872e024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
export default app;
