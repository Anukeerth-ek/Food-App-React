import React from 'react'
import GoogleLoginData from './GoogleLoginData'
import GoogleLogoutData from './GoogleLogoutData'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

const clientId="659235126993-rrf00dim4s50u4gek6kif3f5a8a1bhau.apps.googleusercontent.com"

const Login = ({loginHandler, handleClick}) => {

    useEffect(()=> {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    

  return (
  
    <div className='login-container'>
        <div className='login-container-wrapper'>
            <h2 className='login-heading'>Login</h2>
            <form className='form'>
                <div className='login-container-wrapper-input-box'>

                    <input type="email" 
                    className='inputb' 
                    required
                     onChange={handleClick} name="userInput"/>

                    <label>Email</label>
                    <i class="fa-solid fa-envelope icons"></i>
                </div>

                <div className='login-container-wrapper-input-box'>

                    <input type="password" 
                    className='inputb' required 
                    onChange={handleClick}
                    name="userInput"
                    />

                    <label>Password</label>
                    <i class="fa-solid fa-lock icons"></i>
                </div>
                    
                    <button className='btn' type='submit' onClick={loginHandler}>Login</button>
                    <p className='login-checker'>Don't have an account? <span>Signup</span></p>
            </form>
                                  
                    <p className='app-login-controller'>Or Login with</p>

        <GoogleLoginData/>
     
        <GoogleLogoutData/>

        </div>
    </div>
   
  )
}

export default Login;

