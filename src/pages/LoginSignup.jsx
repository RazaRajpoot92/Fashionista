import React from 'react'

import "./CSS/LoginSingup.css"

const LoginSignup = () => {
  return (
    <div className='login-signup'>
          <div className='login-signup-container'>

            <h1>Sign Up</h1>

            <div className='login-signup-fields'>

              <input type="text" placeholder='Your name' name='name' />
              <input type="email" placeholder='Your email' name='email' />
              <input type="passowrd" placeholder='Your passowrd' name='password' />

            </div>

            <button className='login-signup-btn'>Continue</button>

            <div className='login-singup-already'>
              <p>Already have an account? <span>Login here</span></p>
            </div>


            <div className='login-signup-agree'>

              <input type="checkbox" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>

            </div>



          </div>
    </div>
  )
}

export default LoginSignup
