import React, { useState } from 'react'
import InputField from '../common/InputField'
import CommonButton from '../common/CommonButton'
import Auth from '../components/Authentication'
import { signUp } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../store/action'
import Naviagtion from '../utils/navigatation'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [autherror, setAuthError] = useState(false)
    const [emailAuth, setEmailAuth] = useState(false)
    const [existEmailerror, setExistEmailError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const data = useSelector(state => state.signupInfo)

    const handleClick = () => {
        const existedEmail = data.find(item => item.Email === email)

        if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
            setError(false)
            if (password.length >= 8 && password.length <= 20) {
                setAuthError(false)
                if (regex.test(email)) {
                    setEmailAuth(false)
                    if (!existedEmail) {
                        setExistEmailError(false)
                        dispatch(signUp({ Name: name, Email: email, Password: password }))
                        dispatch(logIn())
                        navigate("/")
                    } else {
                        setExistEmailError(true)
                    }
                } else {
                    setEmailAuth(true)
                }
            } else {
                setAuthError(true)
            }

        } else {
            setError(true)
        }
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
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    type={"email"}
                    placeholder={"Email"}
                    arialabel={"Email"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    type={"password"}
                    placeholder={"Password"}
                    arialabel={"Password"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    autherror ? (<div style={{ color: "red", fontSize: "12px" }}>password should be atleast 8 char and less than 20</div>) : null
                }
                {
                    error ? (<div style={{ color: "red", fontSize: "12px" }}>please fill all details</div>) : null
                }
                {
                    emailAuth ? (<div style={{ color: "red", fontSize: "12px" }}>enter valid email</div>) : null
                }
                {
                    existEmailerror ? (<div style={{ color: "red", fontSize: "12px" }}>email already existed</div>) : null
                }
                <div>
                    <CommonButton
                        title={"Create Account"}
                        className={"signup-button"}
                        onClick={handleClick}
                    />

                    <div className='signup-haveaccount mt-2'>already have an account? <span className='auth-login' ><Naviagtion path="/login">Login</Naviagtion></span></div>
                </div>
            </div>
        </Auth>

    )
}

export default SignupPage