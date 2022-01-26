import React, { useState } from 'react'
import MapModal from '../../Modal/Map';
import NoteModal from '../../Modal/Note';

const OnGoingRow = () => {

    const [toggleActionStatus, setToggleActionStatus] = useState(false);
    const [statusText, setStatusText] = useState('Pending');
    const [reasonModal, setReasonModal] = useState(false);
    const [mapModal, setMapModal] = useState(false);

    return (
        <tr>
            <td>1</td>
            <td>
                <p>Willson</p>
                <p>+91 7867872658</p>
                <p>willson@gmail.com</p>
            </td>
            <td>
                <p>Shoes: 1</p>
                <p>T-Shirts: 2</p>
                <p>Jacket: 1</p>
            </td>
            <td>
                #454 1st Block, Rammurthy, Bangalore-560016 <i className="bi bi-info-circle pointer" onClick={() => setMapModal(true)}></i>
            </td>
            <td>₹5000</td>
            <td>Debit Card</td>
            <td>Complete</td>
            <td><span className="text-nowrap">12-04-2021</span></td>
            <td>
                <div className='d-flex flex-column'>
                    {
                        statusText === "Delivered/Complete" && <input type="date" className='form-control mb-2' placeholder='Date' />
                    }
                    <div>
                        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleActionStatus(!toggleActionStatus)}>
                            {statusText} <i className="bi bi-caret-down"></i>
                        </button>
                        {
                            toggleActionStatus &&
                            <ul className='border position-absolute bg-white'>
                                <li><span className="dropdown-item pointer" 
                                onClick={e => {
                                    setStatusText(e.target.innerHTML)
                                    setToggleActionStatus(false)
                                    setReasonModal(true)
                                }}>Out for Delivery</span></li>
                                <li><span className="dropdown-item pointer" 
                                onClick={e => {
                                    setStatusText(e.target.innerHTML)
                                    setToggleActionStatus(false)
                                }}>Delivered/Complete</span></li>
                            </ul>
                        }
                    </div>
                </div>
            </td>
            <NoteModal
                show={reasonModal}
                setShow={setReasonModal}
                label="Add Note"
            />
            <MapModal
                show={mapModal}
                setShow={setMapModal}
            />
        </tr>
    )
}

export default OnGoingRow
