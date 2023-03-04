import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UseContext = ({children}) => {
    const [user, setUser] = useState(null)
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userLogIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
        });
        return () =>{
            unSubscribe()
        }
    },[])
    
    const authInfo = {user,createNewUser,userLogIn,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;