import React from 'react'
import { Modal } from 'react-bootstrap'

const DiscountModal = ({ show, setShow, title }) => {
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
                                    <label for="">Title</label>
                                    <input type="text" placeholder='Title' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group has-success">
                                    <div className="form-group">
                                        <label className="control-label">Upload Discount Image</label>
                                        <div className="custom-file"><input className="custom-file-input" id="inputGroupFile01" type="file" /><label className="custom-file-label" for="inputGroupFile01">Choose file</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="">Description</label>
                                    <textarea className='form-control' placeholder='Description'></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="">Select Categories</label>
                                    <select name="" id="" className="form-control">
                    <option value="">Categories 1</option>
                    <option value="">Categories 2 </option>
                    <option value="">Categories 3</option>
                </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="">Select Sub-Categories</label>
                                    <select name="" id="" className="form-control">
                <option value="">Sub-Categories 1</option>
                <option value="">Sub-Categories 2 </option>
                <option value="">Sub-Categories 3</option>
                </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="">Select Product</label>
                                    <select name="" id="" className="form-control">
                <option value="">Product 1</option>
                <option value="">Product 2 </option>
                <option value="">Product 3</option>
            </select>
                                </div>
                            </div>
                        </div>
                
                        <div className="row ">
                            
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="inputEmail3" className="control-label col-form-label">Start Date</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon14">
                                            <i className="bi bi-calendar2-plus"></i>
                            </span>
                                        </div>
                                        <input type="date" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label for="inputEmail3" className="control-label col-form-label">End Date</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon18">
                                            <i className="bi bi-calendar2-plus"></i>
                            </span>
                                        </div>
                                        <input type="date" className="form-control" aria-label="Username" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-md-6">
                                <div className="form-group has-danger">
                                    <label className="control-label">Discount Type</label>
                                    <select name="" id="" className="form-control">
                    <option value="">Percentage</option>
                    <option value="">Flat</option>
                </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group has-danger">
                                    <label className="control-label">Discount Amount</label>
                                    <input type="text" className="form-control" aria-label="Username" placeholder="5" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group has-danger">
                                    <label className="control-label">Min. Order Amount</label>
                                    <input type="text" className="form-control" aria-label="Username" placeholder="5000" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <div className="card-body">
                            <button type="submit" className="btn btn-success mr-3">Save</button>
                            <button type="button" className="btn btn-dark" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        </Modal>
    )
}

export default DiscountModal
