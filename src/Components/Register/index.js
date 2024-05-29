 

import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './indexs.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [error, setError] = useState('');
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        setError('');

        if (!username.trim()) {
            setErrorUsername("Username is required");
            return;
        }
        if (!email.trim()) {
            setErrorEmail("Email is required");
            return;
        }
        if (!password.trim()) {
            setErrorPassword("Password is required");
            return;
        }
        if (password.length < 4) {
            setErrorPassword("Password must be at least 4 characters long");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            setErrorEmail("Invalid email format");
            return;
        }

        try {
            const res = await axios.post('https://react-node-backend-code-for-login.onrender.com/register', { username, email, password });
            console.log(res.data);

            if (res.data.status === "success") {
                navigate('/login');
            } else {
                setError(res.data.message);
            }
        } catch (err) {
             setError(err.response.data.message);
             
        }
    };

    useEffect(() => {
        setAnimationCompleted(true);
    }, []);

    return (
        <div className="login-container">
            <div className={`side-container ${animationCompleted ? 'slide-in1' : ''}`}>
                <img src="https://i.ibb.co/52KnVx3/sideimg.webp" alt="sideimage" />
            </div>
            <div className={`login-content ${animationCompleted ? 'slide-in' : ''}`}>
                <h1 className="heading"> Sign Up </h1>
                <form className="form-con" onSubmit={handleSubmit}>
                    <label className="label-design" htmlFor="username">Username</label>
                    <input
                        className="input-design"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errorUsername && <p className="error-message">{errorUsername}</p>}
                    <label className="label-design" htmlFor="email">Email</label>
                    <input
                        className="input-design"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errorEmail && <p className="error-message">{errorEmail}</p>}
                    <label className="label-design" htmlFor="password">Password</label>
                    <input
                        className="input-design"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorPassword && <p className="error-message">{errorPassword}</p>}
                    <div className="buttoncontainer">
                        <button className="button-design" type="submit">Register</button>
                        <button onClick={handleclick} style={{ backgroundColor: "orange", marginTop: "10px" }} className="button-design" type="button">Login</button>
                    </div>
                    {error && <p style={{textAlign:"center"}} className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;
