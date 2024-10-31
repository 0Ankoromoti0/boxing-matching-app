import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebaseのプロジェクト作成時にFirebaseConfigが出てくるのでそれを貼り付ける
const firebaseConfig = {
    apiKey: "Your apiKey",
    authDomain: "authDomain",
    projectId: "storageBucket",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "AppID"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
