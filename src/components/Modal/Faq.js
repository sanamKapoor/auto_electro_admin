import React from 'react'
import { Modal } from 'react-bootstrap'

const FaqModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
        <form>
            <div className="form-body">
                    <textarea className='form-control' rows={5} placeholder='Answer Query'></textarea>
                    <div className="form-actions pt-3">
                        <button type="submit" className="btn btn-primary mr-3">Reply</button>
                        <button type="button" className="btn btn-dark" onClick={handleClose}>Cancel</button>
                    </div>
            </div>
        </form>
        </Modal.Body>
        </Modal>
    )
}

export default FaqModal
