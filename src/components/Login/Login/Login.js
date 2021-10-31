import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    return (
        <div style={{ backgroundColor: 'skyblue' }}>
            <div className="container p-5">
                <h2>Continue with Google...</h2>
                <button className="btn btn-warning" onClick={handleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;