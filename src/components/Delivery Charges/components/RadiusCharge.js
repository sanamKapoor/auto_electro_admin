import React, { useState } from 'react'
import WarningModal from '../../Modal/Warning';

const RadiusCharge = ({ setChargeModalText, setToggleChargeModal }) => {

    const [warningModal, setWarningModal] = useState(false);

    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <ul className="mb-0">
                        <li className="d-flex">
                            <div className="cntnt">
                                <h4>Radius : 20 KM</h4>
                                <h5>Price : 500 </h5>
                                <h5>Order Amount : 5000 </h5>
                            </div>
                            <span className="ml-auto">
                                <i className="bi bi-pencil" onClick={() => {
                                    setToggleChargeModal(true)
                                    setChargeModalText('Edit Delivery Charge')
                                }}></i>
                                <i className="bi bi-trash ml-2" onClick={() => setWarningModal(true)}></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <WarningModal 
                show={warningModal}
                setShow={setWarningModal}
                title="Are you sure you want to delete this delivery charge ?"
            />
        </div>
    )
}

export default RadiusCharge
