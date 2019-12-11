import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Login(props) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);

        axiosWithAuth()
            .post("/login", credentials)
            .then(res => {

                localStorage.setItem("token", res.data.payload);

                setIsLoading(false);
                props.history.push("/friendslist");
            })
            .catch(err => console.log(err));
    };

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
        <div className="login">
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username" hidden>
                    Username:
         </label>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password" hidden>
                    Password:
         </label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;