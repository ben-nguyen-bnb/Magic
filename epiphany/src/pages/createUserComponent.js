import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { getAllUsernames, createNewUser } from "../service/users"

const CreateUserComponent = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')

    const handleCreateAccount = async (event) => {
        event.preventDefault()
        try {
            const response = await getAllUsernames()

            // Check if username already in use
            for (let user of response) {
                if (username === user.username) {
                    setError("Username already in use")
                }
            }

            // check for matching passwords
            if (password1 !== password2) {
                setError("Passwords do not match")
            }
            else {
                await createNewUser(username, password1)
                navigate("/Home")
            }
        } catch(error) {
            console.error("Error Creating Account: ", error)
        }

    }

    return (
        <div className="create-user">
            <h1>Create Account</h1>
            <form onSubmit={handleCreateAccount}>

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password1">Create password</label>
                    <input 
                        type='text'
                        id='password1'
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='password2'>Re-enter password</label>
                    <input 
                        type='text'
                        id='password2'
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>

                <button type="submit">Create Account</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
        </div>
    )
}

export default CreateUserComponent