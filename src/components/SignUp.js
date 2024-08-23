import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./LogIn.css"
// import modal from 'react-modal'
// import { Modal } from 'bootstrap'


const SignUP = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {

            const response = await fetch("https://insta-backend-hr3a.onrender.com/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    userName: userName,
                    password: password
                })
            })

            const data = await response.json()
            console.log(data);

            if (data.message === "Registered successfully") {
                console.log("Succesful register");
                navigate("/login")
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
                        <p id='sig'>Sign up to see photos and videos from your friends.</p>
                        <button class="login-button" title="login">Log in with Facebook</button>
                        <div class="separator">
                            <div class="line"></div>
                            <p>OR</p>
                            <div class="line"></div>
                        </div>
                        <div class="field">
                            <input id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            placeholder="Phone number, username, or email" />
                            <label className='label' for="username">Mobile Number or Email</label>
                        </div>
                        <div class="field">
                            <input id="name" 
                            type="text" 
                            value={name}
                            placeholder="Phone number, username, or email"  
                            onChange={(e) => setName(e.target.value)}/>
                            <label className='label' for="username">Full Name</label>
                        </div>
                        <div class="field">
                            <input id="username" 
                            type="text" 
                            value={userName}
                            placeholder="Username" 
                            onChange={(e) => setUserName(e.target.value)}/>
                            <label className='label' for="username">UserName</label>
                        </div>
                        <div class="field">
                            <input id="password" 
                            type="password" 
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <label className='label' for="password">Password</label>
                        </div>
                       
                        <button type='submit' onClick={handleSubmit} value="Sign Up" class="login-button" title="login">Sign Up</button>
                     <br></br>
                        
                           
                        
                    </form>

                </div>
                <div class="box">
                    Have an account? <Link class="signup" to="/login">Sign In</Link>
                </div>
            </div>
    </div>
  )
}

export default SignUP
