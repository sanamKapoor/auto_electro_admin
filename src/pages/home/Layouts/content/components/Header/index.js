import React, { useState } from 'react';
import userAvatar from "../../../../../../assets/images/users/1.jpg";
import { MenuIcon, ArrowUp } from '../../../../../../svg/icon';

const Header = ({ toggle, setToggle, setSelectedSection }) => {

    const [profilePopUp, setProfilePopUp] = useState(false);

    return (
        <div className='bg d-flex justify-content-between align-items-center p-3 header border-left' style={{"left": toggle ? "15vw" : "6.5vw", "zIndex": 10}}>
            <MenuIcon toggle={toggle} setToggle={setToggle} />
            <img src={userAvatar} height={35} width={35} className='rounded-circle pointer' onClick={() => { setProfilePopUp(!profilePopUp)}}></img>

            {/* Popup */}

            <div style={{"top": "7vh", "right": "20px", "position": "absolute"}} className={`${profilePopUp ? 'd-block' : 'd-none'}`}>
            <span>
                <ArrowUp />
            </span>
            <div className="dropdown-menu-right user-dd dropdown-menu show border-0 shadow" style={{"top": "2.5vh", "right": "-10px", "position": "absolute"}}>
                <div className="d-flex no-block align-items-center p-15 bg-primary text-white m-b-10">
                    <div>
                        <img src={userAvatar} alt="user" width="60" className="img-circle" />
                    </div>
                    <div className="m-l-10">
                        <h4 className="m-b-0">Steave Jobs</h4>
                        <p className="m-b-0">varun@gmail.com</p>
                    </div>
                </div>
                <span className="dropdown-item pointer"><i className="bi bi-person"></i> <span className='ml-2' onClick={() => setSelectedSection("Profile")}>My Profile</span></span>
                {/* <a routerlink="/changepassword" className="dropdown-item" ng-reflect-router-link="/changepassword" href="#/changepassword"><i className="bi bi-key"></i> <span className='ml-2'>Change Password</span></a> */}
                <a className="dropdown-item" href="/auth"><i className="bi bi-power"></i> <span className='ml-2'>Logout</span></a>
            </div>
            </div>
        </div>
    )
}

export default Header
