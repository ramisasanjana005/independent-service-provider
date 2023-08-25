import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from "../../firebase.init";

const auth = getAuth(app);

const Register = () => {
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

    const handleRegisteredChange = event => {
        setRegistered(event.target.checked)
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

    return (
        <div className="register-container">
            <h2>Please Register</h2>
            <form onSubmit={handleFormSubmit}>
                <input onBlur={handleEmailBlur} type="email" placeholder="Your email" required />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder="Your password" required />
                <br />

                <input type="submit" value="Register" />

            </form>

    
            <input onChange={handleRegisteredChange} id="check-registered" type="checkbox" />
            <label for="check-registered">Already Registered?</label>
        </div>
    );
};

export default Register;