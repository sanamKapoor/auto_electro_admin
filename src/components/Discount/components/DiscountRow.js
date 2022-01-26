import React, { useState } from 'react'
import discount from "../../../assets/images/food/banner.jpg";

const DiscountRow = ({ setAddDiscountModal, setDiscountModalTitle, setWarningModal }) => {
    const [toggleStockStatus, setToggleStockStatus] = useState(false);
    const [statusText, setStatusText] = useState('Enable');

    return (
        <tr>
            <td>
                Yummy Food
            </td>
            <td>
                <img src={discount} alt="" width="70px" className="img-fluid" />
            </td>
            <td>Category</td>
            <td>Sub Category</td>
            <td>Product 1, Product 2</td>
            <td><span className="text-nowrap">12-4-04-2021</span></td>
            <td><span className="text-nowrap">15-4-04-2021</span></td>
            <td>Percent</td>
            <td>10</td>
            <td>1000</td>
            <td>
            <div>
                <button className="btn btn-primary" type="button" id="dropdownMenuButton1" onClick={() => setToggleStockStatus(!toggleStockStatus)}>
                    {statusText} <i className="bi bi-caret-down"></i>
                </button>
                {
                    toggleStockStatus &&
                    <ul classNameName='border position-absolute bg-white'>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleStockStatus(false)
                        }}>Enable</span></li>
                        <li><span className="dropdown-item pointer" 
                        onClick={e => {
                            setStatusText(e.target.innerHTML)
                            setToggleStockStatus(false)
                        }}>Disable</span></li>
                    </ul>
                }
            </div>
            </td>
            <td>
                <i className="bi bi-pencil pointer" onClick={() => {
                    setAddDiscountModal(true)
                    setDiscountModalTitle('Edit Discount')
                }}></i>
                <i className="bi bi-trash ml-2 pointer" onClick={() => setWarningModal(true)}></i>
            </td>
        </tr>
    )
}

export default DiscountRow
