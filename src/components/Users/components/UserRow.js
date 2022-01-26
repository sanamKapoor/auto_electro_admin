import React, { useState } from 'react'
import user from "../../../assets/images/users/1.jpg";

const UserRow = ({ setWarningModal, setDetailView }) => {
    const [toggleBlockStatus, setToggleBlockStatus] = useState(false);
    const [statusText, setStatusText] = useState('Block');

    return (
        <tr>
            <td>1</td>
            <td><img src={user} width="50px" className="rounded-circle" alt='' /></td>
            <td className="text-nowrap">Willson</td>
            <td>willson@gmail.com</td>
            <td>+91 7876365678</td>
            <td>Male</td>
            <td>#454 1st Block, Rammurthy, Bangalore-560016</td>
            <td>
                <span className="badge rounded rounded-pill bg-info">Online</span>
            </td>
            <td>
            <div>
                <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleBlockStatus(!toggleBlockStatus)}>
                    {statusText} <i className="bi bi-caret-down"></i>
                </button>
                {
                    toggleBlockStatus &&
                    <ul className='border position-fixed bg-white'>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleBlockStatus(false)
                        }}>Yes</span></li>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleBlockStatus(false)
                        }}>No</span></li>
                    </ul>
                }
            </div>
            </td>
            <td className='text-center'>
                <i className="bi bi-eye pointer" onClick={() => setDetailView(true)}></i>
                <i className="bi bi-trash pointer ml-2" onClick={() => setWarningModal(true)}></i>
            </td>
        </tr>
    )
}

export default UserRow
