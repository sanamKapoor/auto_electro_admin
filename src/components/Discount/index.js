import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import DiscountModal from '../Modal/Discount';
import WarningModal from '../Modal/Warning';
import DiscountRow from './components/DiscountRow';

const Discount = () => {

    const [toggleDiscountFilter, setToggleDiscountFilter] = useState(false);
    const [addDiscountModal, setAddDiscountModal] = useState(false);
    const [modalDiscountTitle, setDiscountModalTitle] = useState('')
    const [warningModal, setWarningModal] = useState(false);

    return (
        <div>
            <h4>Discount</h4>
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
                        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleDiscountFilter(!toggleDiscountFilter)}>
                                Filter by Status <i className="bi bi-caret-down"></i>
                            </button>
                            {
                                toggleDiscountFilter &&
                                <ul className='border position-fixed bg-white'>
                                    <li><span className="dropdown-item pointer">All</span></li>
                                    <li><span className="dropdown-item pointer">Enable</span></li>
                                    <li><span className="dropdown-item pointer">Disable</span></li>
                                </ul>
                            }
                        </div>
                        <button className="btn btn-seconadary mb-2 ml-2" onClick={() => {
                            setAddDiscountModal(true)
                            setDiscountModalTitle('Add Discount')
                        }}>
                            <i className="bi bi-plus-circle"></i> Add Discount
                        </button>
                    </div>
                    <div className="table-responsive mt-3">
                        <table className="table v-middle product-overview" id="zero_config">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Images</th>
                                    <th>Category</th>
                                    <th>Sub Category</th>
                                    <th>Product</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Discount Type</th>
                                    <th>Discount Amount</th>
                                    <th>Min. Order Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <DiscountRow 
                                    setAddDiscountModal={setAddDiscountModal} 
                                    setDiscountModalTitle={setDiscountModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
                                <DiscountRow 
                                    setAddDiscountModal={setAddDiscountModal} 
                                    setDiscountModalTitle={setDiscountModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
                                <DiscountRow 
                                    setAddDiscountModal={setAddDiscountModal} 
                                    setDiscountModalTitle={setDiscountModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
                            </tbody>
                        </table>
                        <hr />
                        <div className=''>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <DiscountModal 
        show={addDiscountModal}
        setShow={setAddDiscountModal}
        title={modalDiscountTitle}
    />
    <WarningModal 
        show={warningModal}
        setShow={setWarningModal}
        title="Are you sure you want to delete this discount ?"
    />
    </div>
    )
}

export default Discount
