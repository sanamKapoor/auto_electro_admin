import React, { useState } from 'react'
import img from "../../../assets/images/users/2.jpg";
import FaqModal from '../../Modal/Faq';
import TextModal from '../../Modal/Text';
import WarningModal from '../../Modal/Warning';

const FaqRow = () => {
    const [readMore, setReadMore] = useState(false);
    const [replyQuery, setReplyQuery] = useState(false);
    const [warningModal, setWarningModal] = useState(false);
    const [toggleQueryStatus, setToggleQueryStatus] = useState(false);
    const [statusText, setStatusText] = useState('Pending');

    return (
        <tr>
            <td>
                <img src={img} alt="" width="60" className="rounded-circle" />
            </td>
            <td>Ronny </td>
            <td>Hannagover@gmail.com </td>
            <td>Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content..... <u className='pointer' onClick={() => setReadMore(true)}>Read More</u></td>
            <td>
                <p>Cat No: #123654</p>
                <p> Name : Shoes </p>
            </td>
            <td>
            <div>
                <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleQueryStatus(!toggleQueryStatus)}>
                    {statusText} <i className="bi bi-caret-down"></i>
                </button>
                {
                    toggleQueryStatus &&
                    <ul className='border position-absolute bg-white'>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleQueryStatus(false)
                        }}>Answered</span></li>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleQueryStatus(false)
                        }}>Pending</span></li>
                    </ul>
                }
            </div>
            </td>
            <td>
                <i className="bi bi-pencil pointer" onClick={() => setReplyQuery(true)}></i>
                <i className="bi bi-trash pointer ml-3" onClick={() => setWarningModal(true)}></i>
            </td>
            <FaqModal 
                show={replyQuery}
                setShow={setReplyQuery}
            />
            <TextModal 
                show={readMore}
                setShow={setReadMore}
                review={'Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content'}
            />
            <WarningModal 
                show={warningModal}
                setShow={setWarningModal}
                title="Are you sure you want to delete this faq ?"
            />
        </tr>
    )
}

export default FaqRow
