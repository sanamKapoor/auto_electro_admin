import React, { useState } from 'react'
import userPic from "../../assets/images/users/1.jpg";

const SECTIONS = {
    PROFILE: "PROFILE",
    EDIT: "EDIT",
    PASSWORD: "PASSWORD"
}

const Profile = () => {

    const [activeSection, setActiveSection] = useState(SECTIONS.PROFILE);
    
    return (
    <div className="row d-flex justify-content-around w-100">
        <div style={{"width": "30%"}}>
            <div className="card">
                <div className="card-body text-center">
                    <div className="m-t-30 text-center">
                        <img src={userPic} className="rounded-circle" width="150" alt="img" />
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn-upload">
                        <i className="bi bi-pencil"></i>
                        </button>
                        <input type="file" name="myfile" />
                    </div>
                </div>
                <div>
                {/* <hr />  */}
                </div>
                {/* <div className="card-body">
                    <small className="text-muted p-t-30 db">Full Name</small>
                    <h6> Steave Jobs</h6>
                    <small className="text-muted">Email address </small>
                    <h6>hannagover@gmail.com</h6>
                    <small className="text-muted p-t-30 db">Phone</small>
                    <h6>+91 654 784 547</h6>
                    <small className="text-muted p-t-30 db">Address</small>
                    <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                </div> */}
            </div>
        </div>
        <div style={{"width": "65%"}}>
            <div className="card">
                <div className='p-3'>
                    <button 
                    className={`btn ${activeSection === SECTIONS.PROFILE && 'btn-primary'}`} 
                    onClick={() => {
                        setActiveSection(SECTIONS.PROFILE)
                    }}>
                        View Profile
                    </button>
                    <button 
                    className={`btn mx-3 ${activeSection === SECTIONS.EDIT && 'btn-primary'}`}
                    onClick={() => {
                        setActiveSection(SECTIONS.EDIT)
                    }}>
                        Edit Profile
                    </button>
                    <button 
                    className={`btn ${activeSection === SECTIONS.PASSWORD && 'btn-primary'}`}
                    onClick={() => {
                        setActiveSection(SECTIONS.PASSWORD)
                    }}>
                        Change Password
                    </button>
                </div>
                {
                activeSection === SECTIONS.PROFILE &&
                <div className="card-body">
                    <div className="row w-100">
                        <div className="col-md-3 col-xs-6 b-r"> <strong>Full Name</strong>
                            <br />
                            <p className="text-muted">Johnathan Deo</p>
                        </div>
                        <div className="col-md-3 col-xs-6 b-r"> <strong>Mobile</strong>
                            <br />
                            <p className="text-muted">(123) 456 7890</p>
                        </div>
                        <div className="col-md-3 col-xs-6 b-r"> <strong>Email</strong>
                            <br />
                            <p className="text-muted">johnathan@admin.com</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 col-xs-12 b-r"> <strong>Address</strong>
                            <br />
                            <p className="text-muted">71 Pilgrim Avenue Chevy Chase, MD 20815</p>
                        </div>
                    </div>
                </div>
                }
                {
                activeSection === SECTIONS.EDIT &&
                <div className="card-body">
                    <form className="form-horizontal form-material row">
                        <div className="col-12 form-group">
                            <label className="col-md-12">Full Name</label>
                            <div className="col-md-12">
                                <input type="text" placeholder="Johnathan Doe" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <label for="example-email" className="col-md-12">Email</label>
                            <div className="col-md-12">
                                <input type="email" placeholder="johnathan@admin.com" className="form-control form-control-line" name="example-email" id="example-email" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <label className="col-md-12">Phone No</label>
                            <div className="col-md-12">
                                <input type="text" placeholder="123 456 7890" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <label className="col-md-12">Address</label>
                            <div className="col-md-12">
                                <input type="text" placeholder="Eg:71 Pilgrim Avenue Chevy Chas" className="form-control form-control-line col-12" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <div className="col-sm-12">
                                <button className="btn btn-primary">Update Profile</button>
                            </div>
                        </div>
                    </form>
                </div>
                }
                {
                activeSection === SECTIONS.PASSWORD &&
                <div className="card-body">
                    <form className="form-horizontal form-material row">
                        <div className="col-12 form-group">
                            {/* <label className="col-md-12">Old Password</label> */}
                            <div className="col-md-12">
                                <input type="text" placeholder="Old Password" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            {/* <label className="col-md-12">New Password</label> */}
                            <div className="col-md-12">
                                <input type="text" placeholder="New Password" className="form-control form-control-line col-12" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            {/* <label className="col-md-12">Confirm New Password</label> */}
                            <div className="col-md-12">
                                <input type="text" placeholder="Confirm New Password" className="form-control form-control-line col-12" />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <div className="col-sm-12">
                                <button className="btn btn-primary">Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
                }
            </div>
        </div>
    </div>
    )
}

export default Profile
