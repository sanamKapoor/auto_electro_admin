import React, { useState } from 'react'
import prod1 from "../../../assets/images/product/product_1.png";

const ProductRow = ({ setAddProductModal, setProductModalTitle, setWarningModal }) => {

    const [toggleAvailableStatus, setToggleAvailableStatus] = useState(false);
    const [availabletext, setAvailabletext] = useState('Available');

    const [toggleRecommendStatus, setToggleRecommendStatus] = useState(false);
    const [recommendtext, setRecommendtext] = useState('Recommended');

    return (
        <div className="col-12">
            <div className="row align-items-stretch py-4">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className='border shadow-sm' style={{'height': '400px', 'width': '400px', 'background': `url(${prod1}) no-repeat center center /cover`}}></div>
                    <div className='mt-3 d-flex justify-content-between' style={{'width': '400px'}}>
                        <div className='border shadow-sm' style={{'height': '80px', 'width': '80px', 'background': `url(${prod1}) no-repeat center center /cover`}}></div>
                        <div className='border shadow-sm' style={{'height': '80px', 'width': '80px', 'background': `url(${prod1}) no-repeat center center /cover`}}></div>
                        <div className='border shadow-sm' style={{'height': '80px', 'width': '80px', 'background': `url(${prod1}) no-repeat center center /cover`}}></div>
                        <div className='border shadow-sm' style={{'height': '80px', 'width': '80px', 'background': `url(${prod1}) no-repeat center center /cover`}}></div>
                    </div>
                </div>
                <div className="col-md-6 row">
                    <h3 className="w-100 pl-2"> Shoes </h3>
                    <div className="col-md-4">
                        <p> <b className="text-black">Category</b> : <span>Footwears</span> </p>
                        <p> <b className="text-black">Sub-Category</b> : <span>Casual</span></p>
                        <p> <b className="text-black">Raw Price</b> : <span>₹20</span></p>
                        <p> <b className="text-black">Mrp Price</b> : <span>₹22</span></p>
                        <p> <b className="text-black">Tax</b> : <span>₹2</span></p>
                        <p> <b className="text-black">Product Quantity</b> : <span>1</span></p>
                        <p> <b className="text-black">Quantity </b> : 1</p>
                        <p> <b className="text-black">Purchase Limit </b> : 100</p>
                        <p> <b className="text-black">Stock Amount </b> : 1000</p>
                    </div>
                    <div className="col-md-4">
                        <p> <b className="text-black">ID</b> : <span>#1251235</span> </p>
                        <p> <b className="text-black">Cat No</b> : <span>MME01</span> </p>
                        <p> <b className="text-black">Sizes</b> : <span>Medium, Large, Small</span></p>
                        <p> <b className="text-black">Discount</b> : <span>10%</span></p>
                        <p> <b className="text-black">Purchase Limit</b> : <span>3</span> </p>
                        <p className='d-flex align-items-center'> <b className="text-black">Color</b> : <span className='d-flex'> 
                        <small className='bg-dark border rounded-circle ml-2' style={{"width": "20px", "height": "20px"}}></small>
                        <small className='bg-primary border rounded-circle ml-1' style={{"width": "20px", "height": "20px"}}></small>
                        <small className='bg-warning border rounded-circle ml-1' style={{"width": "20px", "height": "20px"}}></small> 
                        </span>
                        </p>
                        <p> <b className="text-black"> Weight </b> : 100g</p>
                        <p> <b className="text-black"> Dimensions </b> : 75 x 75 x 25 (mm)</p>
                    </div>
                    <div className="col-md-4">
                        <p> <b className="text-black"> Warranty </b> : <span>1 year</span></p>
                        <p> <b className="text-black">In Stock </b> : Yes</p>
                        <p> <b className="text-black">On Sale </b> : No</p>
                        <p> <b className="text-black"> Total Buyers </b> : 1000</p>
                        <p> <b className="text-black"> Total Orders </b> : 100</p>
                        <p> <b className="text-black"> Reviews </b> : 240</p>
                    </div>
                    <div className='col-md-6'>
                        <label className="text-black">Description</label>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, recusandae quibusdam. Adipisicing elit. Quos voluptatem, recusandae quibusdam.</p>
                    </div>
                    <div className='col-md-6'>
                        <label className="text-black">Features</label>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-12 d-flex align-items-stretch">
                            <div>
                                <button className="btn btn-primary h-100" type="button" id="dropdownMenuButton1" onClick={() => setToggleAvailableStatus(!toggleAvailableStatus)}>
                                    {availabletext} <i className="bi bi-caret-down"></i>
                                </button>
                                {
                                    toggleAvailableStatus &&
                                    <ul className='border position-absolute bg-white'>
                                        <li><span className="dropdown-item pointer" 
                                        onClick={e => {
                                            setAvailabletext(e.target.innerHTML)
                                            setToggleAvailableStatus(false)
                                        }}>Available</span></li>
                                        <li><span className="dropdown-item pointer" 
                                        onClick={e => {
                                            setAvailabletext(e.target.innerHTML)
                                            setToggleAvailableStatus(false)
                                        }}>Unavailable</span></li>
                                    </ul>
                                }
                            </div>
                            <div className='ml-2'>
                                <button className="btn btn-primary h-100" type="button" id="dropdownMenuButton1" onClick={() => setToggleRecommendStatus(!toggleRecommendStatus)}>
                                    {recommendtext} <i className="bi bi-caret-down"></i>
                                </button>
                                {
                                    toggleRecommendStatus &&
                                    <ul className='border position-absolute bg-white'>
                                        <li><span className="dropdown-item pointer" 
                                        onClick={e => {
                                            setRecommendtext(e.target.innerHTML)
                                            setToggleRecommendStatus(false)
                                        }}>Recommended</span></li>
                                        <li><span className="dropdown-item pointer" 
                                        onClick={e => {
                                            setRecommendtext(e.target.innerHTML)
                                            setToggleRecommendStatus(false)
                                        }}>Not Recommended</span></li>
                                    </ul>
                                }
                            </div>
                            <button className="btn btn-primary ml-2" onClick={() => {
                                    setAddProductModal(true)
                                    setProductModalTitle('Edit Product')
                                }}>
                                <i className="bi bi-pencil pointer"></i> Edit                        
                            </button>
                            <button className="btn btn-danger ml-2" onClick={() => setWarningModal(true)}>
                                <i className="bi bi-trash pointer"></i> Delete
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRow
