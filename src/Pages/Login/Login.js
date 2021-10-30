import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleLogin} = useAuth();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = ()=>{
        googleLogin()
        .then(result =>{
            history.replace(from);
            console.log(result)
        }).catch(err => console.log(err.message)
        )
    }
    return (
        <div className='flex-section height'>
            <button onClick={googleSignIn}>Login With Google</button>
        </div>
    );
};

export default Login;