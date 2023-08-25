import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase=()=>{

    const [user, setUser] = useState({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registered, setRegistered] = useState(false);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleFormSubmit = event => {
        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        event.preventDefault();
    }

    const signInWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
        setUser(user);
        })
        
    }, []);


    return { user, handleEmailBlur, handlePasswordBlur, handleFormSubmit, signInWithGoogle, handleSignOut }
}

export default useFirebase;