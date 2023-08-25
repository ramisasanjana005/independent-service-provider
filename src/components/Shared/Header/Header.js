import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../../firebase.init';

const auth = getAuth(app);

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="header">
            <h1 className="header-title">NH Photography</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/checkout">Checkout</Link> 
                <Link to="/register">Register</Link>                               
                {
                    user?.uid 
                    ? 
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;