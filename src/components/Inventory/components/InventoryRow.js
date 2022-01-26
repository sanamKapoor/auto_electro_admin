import React, { useState } from 'react';
import prod1 from "../../../assets/images/product/product_4.png";

const InventoryRow = ({ setAddInventoryModal }) => {
    const [toggleStockStatus, setToggleStockStatus] = useState(false);
    const [statusText, setStatusText] = useState('Available');

    return (
        <tr>
            <td><img src={prod1} width="50px" className="border-circle" alt='' /></td>
            <td>#123654</td>
            <td className="text-nowrap">Shoes</td>
            <td>Category 1</td>
            <td>Sub-Category 1</td>
            <td>
                <input type="number" name="purchase_limit" defaultValue={3} className='form-control w-50' />
            </td>
            <td>
                <span className="text-success">30(In Stock)</span> 
                <button className="btn btn-primary btn-sm ml-1" onClick={() => setAddInventoryModal(true)}>
                <i className="bi bi-plus-lg"></i></button>
            </td>
            <td>
            <div>
                <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleStockStatus(!toggleStockStatus)}>
                    {statusText} <i className="bi bi-caret-down"></i>
                </button>
                {
                    toggleStockStatus &&
                    <ul className='border position-fixed bg-white'>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleStockStatus(false)
                        }}>Available</span></li>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleStockStatus(false)
                        }}>Unavailable</span></li>
                    </ul>
                }
            </div>
            </td>
        </tr>
    )
}

export default InventoryRow
