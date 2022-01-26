import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import CancelledRow from './components/CancelledRow';
import CompletedRow from './components/CompletedRow';
import OnGoingRow from './components/OngoingRow';
import UpComingRow from './components/UpComingRow';

const ORDERS = {
    UPCOMING: "UPCOMING",
    ONGOING: "ONGOING",
    COMPLETED: "COMPLETED",
    CANCELLED: "CANCELLED"
}

const Orders = () => {

    const [activeSection, setActiveSection] = useState(ORDERS.UPCOMING);
    const [toggleOrderFilter, setToggleOrderFilter] = useState(false);
    

    const renderTableHead = () => {
        switch(activeSection){
            case ORDERS.UPCOMING:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Order Items</th>
                        <th>Delivery Address</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                        <th>Action</th>
                    </tr>
                )
            case ORDERS.ONGOING:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Order Items</th>
                        <th>Delivery Address</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                        <th>Action</th>
                    </tr>
                )
            case ORDERS.COMPLETED:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Order Items</th>
                        <th>Delivery Address</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                    </tr>
                )
            case ORDERS.CANCELLED:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Order Items</th>
                        <th>Delivery Address</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                        <th>Cancel Date</th>
                        <th>Cancel Reason</th>
                    </tr>
                )
            default:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Order Items</th>
                        <th>Delivery Address</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Order Date</th>
                        <th>Action</th>
                    </tr>
                )
        }
    }

    const renderTableRow = () => {
        switch(activeSection){
            case ORDERS.UPCOMING:
                return <UpComingRow />
            case ORDERS.ONGOING:
                return <OnGoingRow />
            case ORDERS.COMPLETED:
                return <CompletedRow />
            case ORDERS.CANCELLED:
                return <CancelledRow />
            default:
                return <UpComingRow />
        }
    }

    return (
        <div>
            <h4>Orders</h4>
            <div className='card mt-4'>
                <div className='card-body p-3'>
                    <div className='d-flex'>
                        <button 
                            className={`btn mx-1 ${activeSection === ORDERS.UPCOMING ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(ORDERS.UPCOMING)}
                        >
                            Upcoming Orders
                        </button>
                        <button 
                            className={`btn mx-1 ${activeSection === ORDERS.ONGOING ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(ORDERS.ONGOING)}
                        >
                            Ongoing Orders
                        </button>
                        <button 
                            className={`btn mx-1 ${activeSection === ORDERS.COMPLETED ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(ORDERS.COMPLETED)}
                        >
                            Completed Orders
                        </button>
                        <button 
                            className={`btn mx-1 ${activeSection === ORDERS.CANCELLED ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(ORDERS.CANCELLED)}
                        >
                            Cancelled Orders
                        </button>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                        </div>
                        <div className='col-md-auto ml-auto d-flex align-items-center'>
                            <input type="date" className='form-control' placeholder='Date' />
                        {
                            (activeSection === ORDERS.UPCOMING || activeSection === ORDERS.ONGOING) 
                            &&
                                <div className="d-inline-block ml-2">
                                    <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleOrderFilter(!toggleOrderFilter)}>
                                            Filter by Status <i className="bi bi-caret-down"></i>
                                    </button>
                                    {
                                        toggleOrderFilter &&
                                        <ul className='border position-absolute bg-white'>
                                            <li><span className="dropdown-item pointer">All</span></li>
                                            <li><span className="dropdown-item pointer">
                                            { activeSection === ORDERS.UPCOMING ? "Accept" : 'Out for Delivery' }
                                            </span></li>
                                            <li><span className="dropdown-item pointer">
                                            { activeSection === ORDERS.UPCOMING ? "Reject" : 'Delivered/Complete' }
                                            </span></li>
                                        </ul>
                                    }
                                </div>
                        }
                        </div>
                    </div>
                    <div className="table-responsive mt-3">
                        <table className="table v-middle product-overview" id="zero_config">
                            <thead>
                                { renderTableHead() }
                            </thead>
                            <tbody>
                                { renderTableRow() }
                            </tbody>
                        </table>
                        <hr />
                        <div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
