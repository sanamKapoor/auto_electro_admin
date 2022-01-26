import React from 'react'
import { Modal } from 'react-bootstrap'

const MapModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
            <div className='p-2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10446.905830415863!2d76.97161777889411!3d30.293053512796288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c0fb9c873613c9b!2sB.S%20Steel%20Fabricator%20and%20Doors!5e0!3m2!1sen!2sin!4v1613862856960!5m2!1sen!2sin" width="100%" height="150" frameborder="0" allowfullscreen></iframe>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default MapModal
