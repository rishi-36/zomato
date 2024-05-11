import React from 'react'
import './Css_SignUp.css'

function SignUp() {
  return (
    <>
        <div class="signup-container">
            <div >
                <h2 style={{marginTop:"25px",textAlign:"center"}}>Create Account</h2>
            </div>

            <form action="" class="form">
                <div class="phone">
                    <input type="text" name="" id="phone" placeholder="First Name"/>
                </div>
                <div class="phone">
                    <input type="text" name="" id="phone" placeholder="Last Name"/>
                </div>

                <div class="terms-con">
                    <i class="fa-regular fa-square-check check-box"></i><p> I agree to ZWIGATO Terms of Service, Privacy Policy and Content Policies</p>      
                </div>

                <button class="create-act">Create Account</button>
                <p class="or" style={{marginBottom:"10px"}}>or</p>

                <button class="google">Continue with Google</button>

                {/* <p class="new-user">
                    New to ZWIGATO ? <span ><button class="create-account">Create Account</button></span>
                </p>  */}
            </form>
        </div>
    </>
  )
}

export default SignUp
