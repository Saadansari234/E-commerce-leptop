import React from 'react'

const Auth = (props) => {
    return (
        <div className='auth-contain' >
            <div  className='auth-contain-inner' >
                <div className='auth-box-1' >
                    <div className='auth-box-inner'>
                        <img src="./assets/Login-pic.png" alt="login" className='auth-img' />
                    </div>
                </div>
                <div className='auth-box-2 '>
                    <div className='auth-content'>
                        <div className='auth-content-inner'>
                            {props.children}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth