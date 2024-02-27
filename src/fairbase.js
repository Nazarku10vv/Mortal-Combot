import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCId1HVcmDI0xwax65rcuUjY8VIzrph8do",
    authDomain: "mortal-commbot.firebaseapp.com",
    projectId: "mortal-commbot",
    storageBucket: "mortal-commbot.appspot.com",
    messagingSenderId: "506346860373",
    appId: "1:506346860373:web:f2d417bd907b72d0ae09dc",
    measurementId: "G-XHSW534BHF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
