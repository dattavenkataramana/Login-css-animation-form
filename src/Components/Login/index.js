import { useState ,useEffect} from "react";
import axios from 'axios';
import './indexx.css'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
 
function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
            setAnimationCompleted(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPassword('')
        setEmail('')
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
        
         
        const res = await axios.post('https://react-node-backend-code-for-login.onrender.com/login', { email, password })
        console.log(res.data.token)
        if(res.data.token){
            Cookies.set("jwt_token", res.data.token, {
                expires: 30
              });
             
        }
            setPassword('')
            setEmail('')

    }

    return (
        <div className="login-container">
            <div className={`login-content ${animationCompleted ? 'slide-in' : ''}`}>
                <h1 className="heading"> Login </h1>
                <form className="form-con" onSubmit={handleSubmit}>
                    <label className="label-design" htmlFor="email">Email</label>
                    <input className="input-design" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorEmail && <p className="error-message">{errorEmail}</p>}
                    <label className="label-design" htmlFor="password">Password</label>
                    <input className="input-design" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorPassword && <p className="error-message">{errorPassword}</p>}
                    <div className="buttoncontainer">
                        <button className="button-design" type="submit">Login</button>
                        <p className="para">Don't have an account? <Link to="/register" className="signup-link">Sign up</Link></p>
                    </div>
                </form>
            </div>
            <div className={`side-container ${animationCompleted ?  'slide-in1' : ''}`}>
                <img src="https://i.ibb.co/52KnVx3/sideimg.webp" alt="sideimage" />
            </div>
        </div>
    )
}

export default Login;

