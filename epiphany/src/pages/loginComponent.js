import { React}  from 'react';
import { useState } from 'react';
import { login } from "../service/users";
import { useNavigate } from 'react-router-dom';

// check for user (match username to password)


// create new user


// redirect user to next page after login


const LoginComponent = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    // Login Button
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await login(username);

            // Go to Home page
            if (password === user.password) {
                navigate('/Home')
            }

            // Wrong password
            else {
                setError('Wrong password/email');
            }
        } catch(error) {
            console.error("LOGIN ERROR: ", error)
        }
    }
    
    // Go to create new user account
    const handleCreateUser = async (event) => {
        navigate("/CreateAccount")
    }
    
    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>

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
                <button type="button" onClick={handleCreateUser}>Create New Account</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginComponent;