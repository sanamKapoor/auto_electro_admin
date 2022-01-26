import React from 'react'
import { Modal } from 'react-bootstrap'
import banner from '../../assets/images/product/product_1.png'

const ProductModal = ({ show, setShow, title }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="/">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Category</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option value="electronics">Electronics</option>
                                    <option value="panels">Panels</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Sub Category</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option value="laptop">Laptop</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="tv">TVs</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Name</label>
                                <input type="text" id="firstName" className="form-control" placeholder="Digital Meter" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-success">
                                <div className="form-group">
                                    <label className="control-label">Upload Images</label>
                                    <div className="custom-file"><input className="custom-file-input" id="inputGroupFile01" type="file" /><label className="custom-file-label" for="inputGroupFile01">Choose file</label></div>
                                </div>
                                <ul className="banner-list list-style-none d-flex">
                                    <div>
                                        <i className="bi bi-x position-absolute pointer"></i>
                                        <li className="banner-list-listing border p-1 mr-1">
                                            <img src={banner} className="img-fluid" width={40} alt='' />
                                        </li>
                                    </div> 
                                    <div>
                                        <i className="bi bi-x position-absolute pointer"></i>
                                        <li className="banner-list-listing border p-1 mr-1">
                                            <img src={banner} className="img-fluid" width={40} alt='' />
                                        </li>
                                    </div> 
                                    <div>
                                        <i className="bi bi-x position-absolute pointer"></i>
                                        <li className="banner-list-listing border p-1 mr-1">
                                            <img src={banner} className="img-fluid" width={40} alt='' />
                                        </li>
                                    </div> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Cat No</label>
                                <input type="text" id="firstName" className="form-control" placeholder="MME02" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Stock Amount</label>
                                <input type="text" id="firstName" className="form-control" placeholder="100" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Warranty</label>
                                <input type="text" id="firstName" className="form-control" placeholder="1 year" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Quantity</label>
                                <input type="text" id="firstName" className="form-control" placeholder="1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Price</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend"><span className="input-group-text">₹</span></div><input aria-describedby="basic-addon1" aria-label="price" className="form-control" placeholder="Product Cost" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Tax</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend"><span className="input-group-text">₹</span></div><input aria-describedby="basic-addon1" aria-label="price" className="form-control" placeholder="Price" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Discount Type</label>
                                <input type="text" id="firstName" className="form-control" placeholder="Flat" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Discount Amount</label>
                                <input type="text" id="firstName" className="form-control" placeholder="100" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Purchase Limit</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="5" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">On Sale</label>
                                <select className="form-select form-control" aria-label="Default select example">
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Sizes</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="Medium, Small, Large" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label for="exampleColorInput" className="form-label">Color</label>
                                <div className='d-flex'>
                                <input type="color" className="form-control form-control-color py-0 px-1 col-md-2" id="exampleColorInput" title="Choose your color" />
                                <div className='bg-dark border rounded-circle ml-2' style={{"width": "25px", "height": "25px"}}></div>
                                <div className='bg-primary border rounded-circle ml-1' style={{"width": "25px", "height": "25px"}}></div>
                                <div className='bg-warning border rounded-circle ml-1' style={{"width": "25px", "height": "25px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Height</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="50mm" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Width</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="50mm" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Depth</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="20mm" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <label className="control-label">Weight</label>
                                <input type="number" className="form-control" aria-label="Username" placeholder="50g" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group has-danger">
                                <label className="control-label">Features</label>
                                <div className='d-flex'>
                                <input type="text" className="form-control" aria-label="Username" placeholder="Feature of the product" />
                                <button className='btn btn-warning ml-3'><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group has-danger">
                                <label className="control-label">Configurations</label>
                                <div className='d-flex'>
                                <input type="text" className="form-control" aria-label="Username" placeholder="Key" />
                                <input type="text" className="form-control mx-3" aria-label="Username" placeholder="Value" />
                                <button className='btn btn-warning'><i className="bi bi-plus-lg"></i></button>
                                </div>                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group has-danger">
                                <label className="control-label">Description</label>
                                <textarea name="" id="" cols="30" rows="3" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mr-3"><i className="fa fa-check"></i> Save </button>
                    <button type="button" className="btn btn-dark" onClick={handleClose}>Cancel</button>
                </div>
            </form>
        </Modal.Body>
        </Modal>
    )
}

export default ProductModal
