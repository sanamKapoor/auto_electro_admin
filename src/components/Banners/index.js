import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import BannerModal from '../Modal/Banner';
import WarningModal from '../Modal/Warning';
import BannerRow from './components/BannerRow';

const Banners = () => {

    const [toggleBannerFilter, setToggleBannerFilter] = useState(false);
    const [addBannerModal, setAddBannerModal] = useState(false);
    const [modalBannerTitle, setBannerModalTitle] = useState('')
    const [warningModal, setWarningModal] = useState(false);

    return (
        <div>
            <h4>Banner</h4>
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
                        <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleBannerFilter(!toggleBannerFilter)}>
                                Filter by Status <i className="bi bi-caret-down"></i>
                            </button>
                            {
                                toggleBannerFilter &&
                                <ul classNameName='border position-fixed bg-white'>
                                    <li><span className="dropdown-item pointer">All</span></li>
                                    <li><span className="dropdown-item pointer">Enable</span></li>
                                    <li><span className="dropdown-item pointer">Disable</span></li>
                                </ul>
                            }
                        </div>
                        <button className="btn btn-seconadary mb-2 ml-2" onClick={() => {
                            setAddBannerModal(true)
                            setBannerModalTitle('Add Banner')
                        }}>
                            <i className="bi bi-plus-circle"></i> Add Banner
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
                                <BannerRow 
                                    setAddBannerModal={setAddBannerModal} 
                                    setBannerModalTitle={setBannerModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
                                <BannerRow 
                                    setAddBannerModal={setAddBannerModal} 
                                    setBannerModalTitle={setBannerModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
                                <BannerRow 
                                    setAddBannerModal={setAddBannerModal} 
                                    setBannerModalTitle={setBannerModalTitle}
                                    setWarningModal={setWarningModal}  
                                />
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
    <BannerModal 
        show={addBannerModal}
        setShow={setAddBannerModal}
        title={modalBannerTitle}
    />
    <WarningModal 
        show={warningModal}
        setShow={setWarningModal}
        title="Are you sure you want to delete this banner ?"
    />
    </div>
    )
}

export default Banners
