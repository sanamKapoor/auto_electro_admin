import React, { useState } from 'react'
import Pagination from '../Common/Pagination';
import InventoryModal from '../Modal/Inventory';
import InventoryRow from './components/InventoryRow';

const Inventory = () => {

    const [toggleStockFilter, setToggleStockFilter] = useState(false);
    const [addInventoryModal, setAddInventoryModal] = useState(false);

    return (
        <div>
            <h4>Inventory</h4>
            <div className="row mt-4">
                <div className="col-lg-12">
            <div className="card">
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
                            <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleStockFilter(!toggleStockFilter)}>
                                Filter by Stock Status <i className="bi bi-caret-down"></i>
                            </button>
                            {
                                toggleStockFilter &&
                                <ul className='border position-absolute bg-white'>
                                    <li><span className="dropdown-item pointer">All</span></li>
                                    <li><span className="dropdown-item pointer">In Stock</span></li>
                                    <li><span className="dropdown-item pointer">Out of Stock</span></li>
                                </ul>
                            }
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table v-middle product-overview" id="zero_config">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Cat No</th>
                                            <th>Product Name</th>
                                            <th>Category</th>
                                            <th>Sub-Category</th>
                                            <th>Purchase Limit</th>
                                            <th>Current Stock</th>
                                            <th className="text-nowrap">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <InventoryRow setAddInventoryModal={setAddInventoryModal} />
                                        <InventoryRow setAddInventoryModal={setAddInventoryModal} />
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
            <InventoryModal 
                show={addInventoryModal} 
                setShow={setAddInventoryModal}
            />
        </div>
    )
}

export default Inventory;
