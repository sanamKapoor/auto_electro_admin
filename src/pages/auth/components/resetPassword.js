import React from 'react'
import { AUTH_SECTION } from '../../../utils/constants'

const ResetPassword = ({setSection}) => {
    return (
    <div id="loginform">
            <div className="logo">
                <h4>
                Reset Password
                </h4> 
                <span className="db">
                </span>
            </div>
            <div className="row">
                <div className="col-12">
                    <form className="form-horizontal m-t-20" id="loginform">
                        <div className="input-group mb-3">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required />
                        </div>
                        <div className="form-group text-center">
                            <div className="col-xs-12 p-b-20">
                                <button className="btn btn-block btn-lg theme_btn text-white" onClick={() => setSection(AUTH_SECTION.LOGIN)}>Reset Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
