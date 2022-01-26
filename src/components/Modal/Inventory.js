import React from 'react'
import { Modal } from 'react-bootstrap'

const InventoryModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Body>
        <form>
            <div className="form-body">
                <div className="card-body">
                    <div className="form-group has-danger">
                        <label className="control-label">Add Quantity</label>
                        <input type="number" placeholder="" className="form-control" />
                    </div>

                    <div className="form-actions p-2">
                        <button type="submit" className="btn btn-primary mr-3">Add</button>
                        <button type="button" className="btn btn-dark" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
        </Modal.Body>
        </Modal>
    )
}

export default InventoryModal
