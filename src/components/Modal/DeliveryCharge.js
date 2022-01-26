import React from 'react'
import { Modal } from 'react-bootstrap'

const DeliveryChargeModal = ({ show, setShow, title }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form className="row">
                <div className="form-group col-md-6">
                    <label>Radius</label>
                    <input type="text" className="form-control" placeholder="10 KM" />
                </div>
                <div className="form-group col-md-6">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="500" />
                </div>
                <div className="form-group col-md-6">
                    <label>Order Amount</label>
                    <input type="text" className="form-control" placeholder="5000" />
                </div>
            </form>
            <div className="col-12"><button className="btn theme_btn mt-3">Save</button></div>
        </Modal.Body>
        </Modal>
    )
}

export default DeliveryChargeModal
