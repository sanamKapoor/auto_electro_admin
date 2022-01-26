import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import StarRating from '../Common/StarRating';
import ReviewRow from './components/ReviewRow';

const Reviews = () => {

    const [toggleRatingFilter, setToggleRatingFilter] = useState(false);

    return (
        <div>
            <h4>Reviews</h4>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="w-25">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" id="prenametext" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleRatingFilter(!toggleRatingFilter)}>
                                    Filter by review rating <i className="bi bi-caret-down"></i>
                                </button>
                                {
                                    toggleRatingFilter &&
                                    <ul classNameName='border position-absolute bg-white'>
                                        <li>
                                            <span className="dropdown-item pointer py-1"><StarRating rating={1} /></span>
                                        </li>
                                        <li>
                                            <span className="dropdown-item pointer py-1"><StarRating rating={2} /></span>
                                        </li>
                                        <li>
                                            <span className="dropdown-item pointer py-1"><StarRating rating={3} /></span>
                                        </li>
                                        <li>
                                            <span className="dropdown-item pointer py-1"><StarRating rating={4} /></span>
                                        </li>
                                        <li>
                                            <span className="dropdown-item pointer py-1"><StarRating rating={5} /></span>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <table className="table v-middle product-overview mt-3" id="zero_config">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Rating</th>
                                    <th className="col-4">Review</th>
                                    <th>Product</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               <ReviewRow />
                               <ReviewRow />
                               <ReviewRow />
                            </tbody>
                        </table>
                        <hr />
                        <Pagination />
                    </div>
                </div>
            </div>
    )
}

export default Reviews
