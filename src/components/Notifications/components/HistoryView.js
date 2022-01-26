import React from 'react'
import Pagination from '../../Common/Pagination';
import HistoryRow from './HistoryRow';

const HistoryView = ({ setShowHistory }) => {
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
                <button className='btn btn-primary' onClick={() => setShowHistory(false)}>Back</button>
            </div>
            <table className="table v-middle product-overview mt-3" id="zero_config">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <HistoryRow />
                    <HistoryRow />
                    <HistoryRow />
                </tbody>
            </table>
            <hr />
            <Pagination />
    </div>
    )
}

export default HistoryView
