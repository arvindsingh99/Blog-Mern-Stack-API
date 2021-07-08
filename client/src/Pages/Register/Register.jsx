import './Register.css'
import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <span className="registerTitle">Register Yourself</span>
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enetr Your Username ..." />
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enetr Your email ..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enetr Password" />
                <button className="registerButton">
                <Link to="/register" className="link">Register</Link>
                </button>
            </form>
            <button className="registerLoginButton">
            <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}

export default Register
