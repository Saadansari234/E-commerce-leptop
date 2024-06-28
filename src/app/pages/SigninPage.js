import React from 'react'
import InputField from '../common/InputField'
import CommonButton from '../common/CommonButton'
import Auth from '../components/Authentication'

const SigninPage = () => {
    return (
        <Auth>
            <div>
                <div className='title1'>Log in to Exclusive</div>
                <div className='title2'>Enter Your Details</div>
            </div>
            <div>
                <InputField
                    type={"text"}
                    placeholder={"Name"}
                    arialabel={"Name"}
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

                <div className='signin-button-grp'>
                    <CommonButton
                        title={"Log in"}
                        className={"signin-button"}
                    />
                    <div><span className='auth-login'>Forgot password?</span></div>
                </div>
            </div>
        </Auth>
    )
}

export default SigninPage