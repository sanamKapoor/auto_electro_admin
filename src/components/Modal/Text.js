import React from 'react'
import { Modal } from 'react-bootstrap'

const TextModal = ({ show, setShow, review }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
            <div className='p-2'>{review}</div>
        </Modal.Body>
        </Modal>
    )
}

export default TextModal
