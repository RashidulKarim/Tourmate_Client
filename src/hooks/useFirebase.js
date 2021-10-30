import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from '../Pages/Login/firebase/firebase.init';
firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
                setIsLoading(false)
            }else{
                setUser('')
            }
        })
    },[])
    
    return {
        googleLogin,
        isLoading,
        user,
        logOut
    }
};

export default useFirebase;