import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../fairbase";

const authMortalProductcontext = createContext();
export const useMortalAuthProduct = () => useContext(authMortalProductcontext);

const INIT_MORTAL_STATE = {
    user: null,
};

export const mortalReducer = (state = INIT_MORTAL_STATE, action) => {
    switch (action.type) {
        case "CHECK_MORTAL":
            return { ...state, user: action.payload };

        default:
            return state;
    }
};

const AuthContext = ({ children }) => {
    const [state, dispath] = useReducer(mortalReducer, INIT_MORTAL_STATE);

    function mortalProductRegister(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvaider = new GoogleAuthProvider();

    async function signInWidthGoogleMortalProduct() {
        try {
            await signInWithPopup(auth, googleProvaider);
        } catch (error) {
            console.log("erorr");
        }
    }
    function Check_UserMortalCommbotProduct() {
        return onAuthStateChanged(auth, (user) => {
            dispath({
                type: "CHECK_MORTAL",
                payload: user,
            });
        });
    }

    useEffect(() => {
        Check_UserMortalCommbotProduct();
    }, []);

    function logInMortalCombot(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function logOutMortalProduct(email, password) {
        try {
            await signOut(auth);
        } catch (error) {
            console.log("erorr");
        }
    }

    const values = {
        mortalProductRegister,
        signInWidthGoogleMortalProduct,
        user: state.user,
        logOutMortalProduct,
        logInMortalCombot,
    };
    return (
        <authMortalProductcontext.Provider value={values}>
            {children}
        </authMortalProductcontext.Provider>
    );
};

export default AuthContext;
