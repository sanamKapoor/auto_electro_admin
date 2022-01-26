import React from 'react'
import { Modal } from 'react-bootstrap'

const NoteModal = ({ show, setShow, label }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
            <form>
                <label>{label}</label>
                <textarea className='form-control'></textarea>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
        </Modal.Body>
        </Modal>
    )
}

export default NoteModal
