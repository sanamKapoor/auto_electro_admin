import React from 'react'
import { AUTH_SECTION } from '../../../utils/constants'

const VerifyOtp = ({setSection}) => {
    return (
        <div>
            <div className="logo">
                <h4 className="font-medium my-3">Verify OTP</h4>
                <span>Enter OTP for reset password!</span>
            </div>
            <div className="row m-t-20">
                <form className="col-12">
                    <div className="form-group row">
                        <div className="col-12">
                            <input className="form-control form-control-lg" type="text" required="" placeholder="OTP" />
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-12">
                            <button className="btn btn-block btn-lg theme_btn" name="action" onClick={() => setSection(AUTH_SECTION.RESET_PASSWORD)}> Verify </button>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-block btn-lg theme_btn" name="action" onClick={() => setSection(AUTH_SECTION.LOGIN)}> Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerifyOtp
