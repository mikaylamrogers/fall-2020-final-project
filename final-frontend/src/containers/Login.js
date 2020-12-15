import React from 'react';
import LoginForm from '../components/LoginForm';

function Login({ LoginFunction }) {
    return (
        <div>
            <h1 className="SiteTitles">login</h1>
            <LoginForm LoginFunction={LoginFunction} />
        </div>
    );
}

export default Login;