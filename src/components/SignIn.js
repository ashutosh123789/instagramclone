import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "./LogIn.css"


    export default function SignIn({setIsLogin}) {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        console.log("i am signin page")
    
        const navigate = useNavigate()
    
    
        async function handleSubmit(e) {
            e.preventDefault()
            
            try {
    
                const response = await fetch("https://insta-backend-hr3a.onrender.com/signin", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
    
                        email: email,
                        password: password
                    })
                })
    
                const data = await response.json()
                console.log(data);
    
                if (data.token) {
                    console.log("Succesful Login")
                    localStorage.setItem("token",data.token)
                    setIsLogin(true)
                    navigate("/")
                }
    
    
            } catch (err) {
                console.log(err)
            }
        }
    
        

    return (
        <div>
            <div class="container">
                <div class="box">
                    <div class="heading"></div>
                    <form class="login-form">
                        <p id='sig'>Log in to see photos and videos from your friends.</p>
                        <button class="login-button" title="login">Log in with Facebook</button>
                        <div class="separator">
                            <div class="line"></div>
                            <p>OR</p>
                            <div class="line"></div>
                        </div>
                        <div class="field">
                            <input id="username" 
                            type="email" 
                            placeholder="Phone number, username, or email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                            <label className='label' for="username">Mobile Number or Email</label>
                        </div>
                       
                        <div class="field">
                            <input id="password" 
                            type="password" 
                            placeholder="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                            <label className='label' for="password">Password</label>
                        </div>
                        <button  
                        type="submit" 
                        onClick={handleSubmit} 
                        value="Sign In"class="login-button" title="login">Log In</button>
                        <br></br>
                        <div class="separator">
                            <div class="line"></div>
                            <p>OR</p>
                            <div class="line"></div>
                        </div>
                        <div class="other">
                            <a class="forgot-password" href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
                <div class="box">
                     Create an account?
                     <Link class="signup" to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}


