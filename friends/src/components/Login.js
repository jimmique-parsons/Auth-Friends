import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
        <div className="login">
            <h2>Login</h2>
        </div>
    );
}

export default Login;