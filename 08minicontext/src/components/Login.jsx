import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = () => {
        setUser({username, password});
    }

    return (
        <>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br/>
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="submit" onClick={handleSubmit} />
        </>
    )
}

export default Login;