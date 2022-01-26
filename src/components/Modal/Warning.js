import React from 'react'
import { Modal } from 'react-bootstrap'

const WarningModal = ({ show, title, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Body>
            <h4>{title}</h4>
            <div className='text-right pt-2'>
                <button className='btn btn-danger'>Yes</button>
                <button className='btn ml-2' onClick={handleClose}>No</button>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default WarningModal
