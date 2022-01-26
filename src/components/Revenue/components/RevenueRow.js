import React from 'react'

const RevenueRow = () => {
    return (
        <tr>
            <td>1</td>
            <td>#1420233</td>
            <td>
                <p>Customer 1</p>
                <p>customer@gmail.com</p>
                <p>+91 9874563210</p>
            </td>
            <td>
                <p>Shoes : <span>1</span></p>
                <p>T-shirt : <span>2</span></p>
                <p>Jacket : <span>2</span></p>
            </td>
            <td className='text-left'><label className="label label-success">Cash</label></td>
            <td>₹250</td>
            <td>01/01/2022</td>
        </tr>
    )
}

export default RevenueRow
