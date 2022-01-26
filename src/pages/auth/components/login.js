import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_SECTION } from '../../../utils/constants';

const Login = ({setSection}) => {

    return (
        <div id="loginform">
            <div className="logo mt-3">
                <h3>
                Auto & Electro
                </h3> 
            </div>
            <div className="row">
                <div className="col-12">
                    <form className="form-horizontal m-t-20" id="loginform">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control form-control-lg" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" required />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label text-white" for="customCheck1">Remember me</label>
                                    <span id="to-recover" className="text-white float-right cursor_pointer" onClick={() => setSection(AUTH_SECTION.RECOVER_ON_EMAIL)}><i className="fa fa-lock m-r-5"></i> Forgot password</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <div className="col-xs-12 p-b-20">
                                <Link to="/" className="btn btn-block btn-lg theme_btn text-white">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
