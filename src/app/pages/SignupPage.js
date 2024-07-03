import React from 'react'
import InputField from '../common/InputField'
import CommonButton from '../common/CommonButton'
import Auth from '../components/Authentication'

const SignupPage = () => {
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
                />
                <InputField
                    type={"email"}
                    placeholder={"Email"}
                    arialabel={"Email"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                />
                <InputField
                    type={"password"}
                    placeholder={"Password"}
                    arialabel={"Password"}
                    className={"input-Auth"}
                    class2={"mb-4"}
                />

                <div>
                    <CommonButton
                        title={"Create Account"}
                        className={"signup-button"}
                    />
                    
                    <div className='signup-haveaccount mt-2'>already have an account? <span className='auth-login'>Login</span></div>
                </div>
            </div>
        </Auth>
 
  )
}

export default SignupPage