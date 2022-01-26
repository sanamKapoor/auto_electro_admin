import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import FaqRow from './components/FaqRow';

const Faqs = () => {

    const [toggleFaqFilter, setToggleFaqFilter] = useState(false);

    return (
        <div>
            <h4>FAQs</h4>
            <div className="row mt-4">
            <div className="col-lg-12">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 d-flex  justify-content-end">
                        <div className="d-inline-block mb-2 mr-2">
                        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleFaqFilter(!toggleFaqFilter)}>
                                Filter by Status <i className="bi bi-caret-down"></i>
                            </button>
                            {
                                toggleFaqFilter &&
                                <ul classNameName='border position-fixed bg-white'>
                                    <li><span className="dropdown-item pointer">All</span></li>
                                    <li><span className="dropdown-item pointer">Answered</span></li>
                                    <li><span className="dropdown-item pointer">Pending</span></li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="table-responsive mt-3">
                    <table className="table v-middle product-overview mt-3" id="zero_config">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th className="col-4">Query</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               <FaqRow />
                               <FaqRow />
                               <FaqRow />
                            </tbody>
                        </table>
                        <hr />
                        <div classNameName=''>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Faqs
