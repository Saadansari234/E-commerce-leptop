import React, { useState } from 'react'
import InputField from '../common/InputField'
import CommonButton from '../common/CommonButton'
import Auth from '../components/Authentication'
import Naviagtion from '../utils/navigatation'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logIn } from '../store/action'
import { useNavigate } from 'react-router-dom'

const SigninPage = () => {
   const [email, setEmail]=useState("")
   const [password, setPassword]=useState("")
   const [autherror, setAuthError]= useState(false)
   const [error, setError]= useState(false)
    const data = useSelector(state => state.signupInfo)
    const dispatch = useDispatch()
    const navigat=useNavigate()


    const handleClick = () => {
      if (email.trim() !== "" || password.trim !== "" ) {
        data.map(item=>{
            if (item.Email === email && item.Password === password) {
                dispatch(logIn())
                navigat("/")
            }else{
                setAuthError(true)
            }
        })
      }else{
        setError(true)
      }
              
    }
    // console.log(data)
    // console.log(autherror)
    console.log(error)
    return (
        <Auth>
            <div>
                <div className='title1'>Log in to Exclusive</div>
                <div className='title2'>Enter Your Details</div>
            </div>
            <div>
                {/* <InputField
                    type={"text"}
                    placeholder={"Name"}
                    arialabel={"Name"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                /> */}
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

                <div className='signin-button-grp'>
                    <CommonButton
                        title={"Log in"}
                        className={"signin-button"}
                        onClick={handleClick}
                    />
                    <div><span className='auth-login'><Naviagtion path={"/signup"}>create account?</Naviagtion></span></div>
                </div>
            </div>
        </Auth>
    )
}

export default SigninPage