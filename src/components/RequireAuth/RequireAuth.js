import React from 'react';
import app from "../../firebase.init";
import { getAuth } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
const auth = getAuth(app);

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return 'Loading...';
    }


    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;   
     }
    return children;
};

export default RequireAuth;