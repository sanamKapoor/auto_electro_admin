import React from 'react'
import { Modal } from 'react-bootstrap'

const CategoryModal = ({title, show, setShow}) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form action="/">
                <div className="form-body">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label">Categories</label>
                                    <input type="text" className="form-control" placeholder='Electronics' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tax Percentage</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend w-100">
                                            <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-percent"></i>
                                            </span>
                                            <input type="number" placeholder="5" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 d-flex flex-column">
                                <label>Description</label>
                                <textarea rows={5} className='block form-control'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <div className="card-body">
                            <button type="submit" className="btn btn-success mr-3"><i className="bi bi-check2 mr-1"></i> Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        </Modal>
    )
}

export default CategoryModal
