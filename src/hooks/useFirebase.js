import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then((result) => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        googleSignIn,
        user,
        error,
        isLoading,
        googleSignOut
    }
}

export default useFirebase;