import React from 'react';
import { useState } from 'react';
import { login } from "../service/users";

// check for user (match username to password)


// create new user


// redirect user to next page after login


const LoginComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await login(username);
            if (password == response.password) {
                console.log("LOGGED IN: ", response)
            }
            else {
                console.log("WRONG PASSWORD OR WRONG EMAIL")
            }
        } catch(error) {
            console.error("LOGIN ERROR: ", error)
        }
    }

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;