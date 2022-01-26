import React, { useState } from 'react'
import DeliveryChargeModal from '../Modal/DeliveryCharge'
import RadiusCharge from './components/RadiusCharge';

const DeliveryCharges = () => {

    const [toggleChargeModal, setToggleChargeModal] = useState(false);
    const [chargeModalText, setChargeModalText] = useState('');

    return (
        <div>
            <h4>Delivery Charges</h4>
            <div className="card mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                            <label>Flat Delivery Charges</label>
                            <form className='d-flex justify-content-around'>
                                <input aria-describedby="basic-addon1" aria-label="price" placeholder="Price" type="number" className="form-control" />
                                <input aria-describedby="basic-addon1" aria-label="price" placeholder="Order Amount" type="number" className="form-control mx-4" />
                                <button type="submit" className='btn btn-primary'>Save</button>
                            </form>
                    </div>
                    <div className="col-12 row mt-5 mb-4">
                        <div className="col-md-8">
                            <label>Delivery Charges for Radius</label>
                        </div>
                        <div className="col-md-4 text-right">
                            <button className="btn btn-primary text-white" onClick={() => {
                                setToggleChargeModal(true);
                                setChargeModalText("Add Delivery Charge")
                            }}>Add Delivery Charge</button>
                        </div>
                    </div>
                    <RadiusCharge setToggleChargeModal={setToggleChargeModal} setChargeModalText={setChargeModalText} />
                    <RadiusCharge setToggleChargeModal={setToggleChargeModal} setChargeModalText={setChargeModalText} />
                    <RadiusCharge setToggleChargeModal={setToggleChargeModal} setChargeModalText={setChargeModalText} />
                    <RadiusCharge setToggleChargeModal={setToggleChargeModal} setChargeModalText={setChargeModalText} />
                    <RadiusCharge setToggleChargeModal={setToggleChargeModal} setChargeModalText={setChargeModalText} />

                    </div>
                </div>
            </div>
            <DeliveryChargeModal 
                show={toggleChargeModal}
                setShow={setToggleChargeModal}
                title={chargeModalText}
            />
        </div>
    )
}

export default DeliveryCharges
