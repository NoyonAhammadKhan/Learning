import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../FireBase/FireBase.config';

export const AuthContext=createContext();

const auth =getAuth(app) 

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(user)
    const providerLogin =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    
    const emailLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logoutUser=()=>{
        return signOut(auth);
    }

    const authInfo={providerLogin,emailLogin,createUser,user, logoutUser,loading,setLoading};

    useEffect(()=>{
        const unsubscribe=()=>onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
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