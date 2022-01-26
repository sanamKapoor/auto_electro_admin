import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import RequestRow from './components/RequestRow';
import ReturnRow from './components/ReturnRow';

const RETURN = {
    REQUEST: "REQUEST",
    RETURNED: "RETURNED",
}

const Returns = () => {

    const [activeSection, setActiveSection] = useState(RETURN.REQUEST);

    const renderTableHead = () => {
        switch(activeSection){
            case RETURN.REQUEST:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Order Id</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Reason</th>
                        <th>Action</th>
                    </tr>
                )
            case RETURN.RETURNED:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Order Id</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Reason</th>
                        <th>Date</th>
                    </tr>
                )
            default:
                return (
                    <tr>
                        <th>#</th>
                        <th>Customer Detail</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Order Id</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Reason</th>
                        <th>Action</th>
                    </tr>
                )
        }
    }

    const renderTableRow = () => {
        switch(activeSection){
            case RETURN.REQUEST:
                return <RequestRow />
            case RETURN.RETURNED:
                return <ReturnRow />
            default:
                return <RequestRow />
        }
    }

    return (
        <div>
            <h4>Returns</h4>
            <div className='card mt-4'>
                <div className='card-body'>
                    <div className='d-flex'>
                        <button 
                            className={`btn mx-1 ${activeSection === RETURN.REQUEST ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(RETURN.REQUEST)}
                        >
                            Return Request
                        </button>
                        <button 
                            className={`btn mx-1 ${activeSection === RETURN.RETURNED ? 'btn-primary' : ''}`}
                            onClick={() => setActiveSection(RETURN.RETURNED)}
                        >
                            Returned Order
                        </button>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                        </div>
                        <div className='col-md-auto ml-auto d-flex align-items-center'>
                            <input type="date" className='form-control' placeholder='Date' />
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

export default Returns
