import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../assets/config/firebase";


export const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //set sign up context provider
    function signup(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //set log in context provider
    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //set log out context provider
    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,   ( user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}