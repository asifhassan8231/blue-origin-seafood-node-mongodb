import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { googleSignIn } = useFirebase();
    return (
        <div>
            <h2>Continue with Google</h2>
            <button className="btn btn-warning" onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;