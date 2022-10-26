import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../FireBase/FireBase.config';

export const AuthContext=createContext();

const auth =getAuth(app) 

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    
    const providerLogin =(provider)=>{
        return signInWithPopup(auth,provider)
    }
    
    const emailLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logoutUser=()=>{
        return signOut(auth);
    }

    const authInfo={providerLogin,emailLogin,createUser,user, logoutUser};

    useEffect(()=>{
        const unsubscribe=()=>onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
        })

        return ()=>unsubscribe()
    },[])


    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;