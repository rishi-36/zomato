import React from 'react'
import './Css_Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
    
    <div className="container">
            <h2   id='login' >Login</h2>
            <form action="" class="form">
                <div className="phone">
                    <input type="text" name="" id="phone" placeholder="Phone"/>
                </div>
                <button className="submit-btn">Send One Time Password</button>
                <p class="or" style={{marginBottom:"10px"}}>or</p>
                <button className="email">Continue with Email</button>

                <button className="google">Continue with Google</button>

                <p className="new-user">
                    New to ZWIGATO ? <span >
                      <NavLink to={'/signup'}>
                      <button class="create-account">Create Account</button>
                      </NavLink>
                    </span>
                </p> 
            </form>
        </div>

    </>
  )
}

export default Login