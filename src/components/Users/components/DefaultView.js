import React, { useState } from 'react'
import Pagination from '../../Common/Pagination';
import UserRow from './UserRow';

const DefaultView = ({ setDetailView, setWarningModal }) => {
    
    const [toggleActiveFilter, setToggleActiveFilter] = useState(false);
    const [toggleOnlineFilter, setToggleOnlineFilter] = useState(false);

    return (
        <div className="card-body">
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
        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleActiveFilter(!toggleActiveFilter)}>
            Filter by Online Status <i className="bi bi-caret-down"></i>
        </button>
        {
            toggleActiveFilter &&
            <ul className='border position-absolute bg-white'>
                <li><span className="dropdown-item pointer">All</span></li>
                <li><span className="dropdown-item pointer">Online</span></li>
                <li><span className="dropdown-item pointer">Offline</span></li>
            </ul>
        }
    </div>
    <div className='ml-2'>
        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleOnlineFilter(!toggleOnlineFilter)}>
            Filter by User Status <i className="bi bi-caret-down"></i>
        </button>
        {
            toggleOnlineFilter &&
            <ul className='border position-absolute bg-white'>
                <li><span className="dropdown-item pointer">All</span></li>
                <li><span className="dropdown-item pointer">Active</span></li>
                <li><span className="dropdown-item pointer">Not Active</span></li>
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
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Online Status</th>
                        <th>Block</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow setDetailView={setDetailView} setWarningModal={setWarningModal} />
                    <UserRow setDetailView={setDetailView} setWarningModal={setWarningModal} />
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
    )
}

export default DefaultView
