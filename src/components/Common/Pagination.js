import React from 'react'

const Pagination = () => {
    return (
        <div className='d-flex justify-content-end'>
            <small className='mx-1'>Items per page: </small>
            <small className='mx-1'>
            <select className="form-select" aria-label="Default select example" defaultValue={5}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            </small>
            <small className='mx-2'>1 of 10</small>
            <i className="bi bi-chevron-left mx-1 pointer"></i>
            <i className="bi bi-chevron-right mx-1 pointer"></i>
        </div>
    )
}

export default Pagination
