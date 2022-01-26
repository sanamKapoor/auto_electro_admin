import React, { useState } from 'react'
import user from "../../../assets/images/users/1.jpg";
import Pagination from '../../Common/Pagination';
import OrderHistoryRow from './OrderHistoryRow';

const DetailedView = ({ setDetailView }) => {

    const [toggleOrderFilter, setToggleOrderFilter] = useState(false);

    return (
        <div className='card-body'>
            <div className='text-right'>
                <button className='btn btn-warning' onClick={() => setDetailView(false)}>Back</button>
            </div>
            <div className='text-center'>
                <img src={user} className='img-fluid rounded rounded-circle' style={{'width': '150px'}} alt="" />
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <div className='w-100 bg-light p-3 m-3'>
                    <h4>Personal Details</h4>
                    <div className='row'>
                        <div className='col-md-6 mt-2'>
                            <h6>Name</h6>
                            <span>Willson</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Email</h6>
                            <span>willson@gmail.com</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Phone</h6>
                            <span>+91 8976567898</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Gender</h6>
                            <span>Male</span>
                        </div>
                        <div className='col-md-12 mt-2'>
                            <h6>Address</h6>
                            <span>#454 1st Block, Rammurthy, Bangalore-560016</span>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10446.905830415863!2d76.97161777889411!3d30.293053512796288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c0fb9c873613c9b!2sB.S%20Steel%20Fabricator%20and%20Doors!5e0!3m2!1sen!2sin!4v1613862856960!5m2!1sen!2sin" width="100%" height="150" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='w-100 bg-light p-3 m-3'>
                    <h4>Order Details</h4>
                    <div className='row'>
                        <div className='col-md-6 mt-2'>
                            <h6>Total Orders:</h6>
                            <span>25</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Amount Spent:</h6>
                            <span>₹2500</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Ongoing Orders:</h6>
                            <span>15</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Completed Orders:</h6>
                            <span>5</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Cancelled Orders:</h6>
                            <span>2</span>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <h6>Returned Orders:</h6>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card m-2 p-3'>
                <h4>Order History</h4>
                <div className='card-body'>
                <div className="d-flex justify-content-between">
                    <div className="w-25">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <div className='d-flex'>
                    <div>
                        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleOrderFilter(!toggleOrderFilter)}>
                            Filter by Order Status <i className="bi bi-caret-down"></i>
                        </button>
                        {
                            toggleOrderFilter &&
                            <ul className='border position-absolute bg-white'>
                                <li><span className="dropdown-item pointer">All</span></li>
                                <li><span className="dropdown-item pointer">Ongoing</span></li>
                                <li><span className="dropdown-item pointer">Complete</span></li>
                                <li><span className="dropdown-item pointer">Cancel</span></li>
                                <li><span className="dropdown-item pointer">Return</span></li>
                            </ul>
                        }
                    </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table v-middle product-overview" id="zero_config">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Ordered Items</th>
                                    <th>Payment Method</th>
                                    <th>Amount</th>
                                    <th>Order Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <OrderHistoryRow />
                                <OrderHistoryRow />
                            </tbody>
                        </table>
                        <hr />
                        <div className='pb-3 pr-2'>
                        <Pagination />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedView
