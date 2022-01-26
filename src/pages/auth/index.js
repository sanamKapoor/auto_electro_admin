import React, { useState } from 'react';
import { AUTH_SECTION } from '../../utils/constants';
import Login from './components/login';
import RecoverEmail from './components/recoverEmail';
import ResetPassword from './components/resetPassword';
import VerifyOTP from './components/verifyOtp';

const Auth = () => {

    const [section, setSection] = useState(AUTH_SECTION.LOGIN); 

    const showSection = () => {
        switch(section){
            case AUTH_SECTION.RECOVER_ON_EMAIL:
                return <RecoverEmail setSection={setSection} />
            case AUTH_SECTION.RESET_PASSWORD:
                return <ResetPassword setSection={setSection} />
            case AUTH_SECTION.VERIFY_OTP:
                return <VerifyOTP setSection={setSection} />
            default: 
                return <Login setSection={setSection} />
        }
    }

    return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center">
    <div className="auth-box on-sidebar">
        {
            showSection()
        }        
    </div>
    </div>
    )
}

export default Auth
