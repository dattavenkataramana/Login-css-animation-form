 
import { useState ,useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './indexs.css'

function  Register() {
    const [username,setUsername] =  useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [animationCompleted, setAnimationCompleted] = useState(false);


    const navigate = useNavigate()
     const handleclick =() =>{
        navigate('/')
     }
    const handleSubmit = (e) => {
        e.preventDefault();
        
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
         
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            setErrorEmail("Invalid email format");
            return;
        }
        
         
        axios.post('http://localhost:3000/login', { username, email, password })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        setAnimationCompleted(true);
}, []);


    return (
        <div className="login-container">
            <div className={`side-container ${animationCompleted ?  'slide-in1' : ''}`}>
                <img  style={{height:"100%"}}  src="https://i.ibb.co/Fqw4YPF/signin-image.jpg" alt="sideimage" />
            </div>
            <div className={`login-content ${animationCompleted ? 'slide-in' : ''}`}>
                <h1 className="heading"> Sign Up </h1>
                <form className="form-con" onSubmit={handleSubmit}>
                    <label className="label-design" htmlFor="username">Username</label>
                    <input className="input-design" id="username" type="text" placeholder="Username" value={username} onChange={(e) =>  setUsername(e.target.value)} />
                    {errorUsername && <p className="error-message">{errorUsername}</p>}
                    <label className="label-design" htmlFor="email">Email</label>
                    <input className="input-design" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorEmail && <p className="error-message">{errorEmail}</p>}
                    <label className="label-design" htmlFor="password">Password</label>
                    <input className="input-design" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorPassword && <p className="error-message">{errorPassword}</p>}
                    <div className="buttoncontainer">
                        <button className="button-design" type="submit">Register</button>
                        <button onClick={handleclick} style={{backgroundColor:"orange",marginTop:"10px"}} className="button-design" type="button">Login</button>
                    </div>
                     
                </form>
            </div>
        </div>
    )
}

export default Register;