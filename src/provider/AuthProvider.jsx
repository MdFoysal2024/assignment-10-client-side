import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();


const AuthProvider = ( {children}) => {

    const [user, setUser] = useState(null);
    console.log(user);

    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider()

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleSignIn = () => {
        //console.log('Google Coming Soon');
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
    

    }





    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        googleSignIn,
        loading,
        updateUserProfile,
        logOut
    }

    //user info কে firebase এ store করে রাখতে onAuthStateChanged ব্যবহার করা হয়.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;