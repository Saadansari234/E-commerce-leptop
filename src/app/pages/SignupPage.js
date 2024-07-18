import React, { useState } from 'react'
import InputField from '../common/InputField'
import CommonButton from '../common/CommonButton'
import Auth from '../components/Authentication'
import { signUp } from '../store/action'
import { useDispatch } from 'react-redux'
import { logIn } from '../store/action'
import Naviagtion from '../utils/navigatation'
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const handleClick=()=>{
        dispatch(signUp({Name:name, Email:email, Password:password}))
        dispatch(logIn())
        navigate("/")
    }

  return (
        <Auth>
            <div>
                <div className='title1'>create an account</div>
                <div className='title2'>Enter Your Details</div>
            </div>
            <div>
                <InputField
                    type={"text"}
                    placeholder={"Full Name"}
                    arialabel={"Full Name"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                    onChange={(e)=> setName(e.target.value)}
                />
                <InputField
                    type={"email"}
                    placeholder={"Email"}
                    arialabel={"Email"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <InputField
                    type={"password"}
                    placeholder={"Password"}
                    arialabel={"Password"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <div>
                    <CommonButton
                        title={"Create Account"}
                        className={"signup-button"}
                        onClick={handleClick}
                    />
                    
                    <div className='signup-haveaccount mt-2'>already have an account? <span className='auth-login' ><Naviagtion path="/">Login</Naviagtion></span></div>
                </div>
            </div>
        </Auth>
 
  )
}

export default SignupPage