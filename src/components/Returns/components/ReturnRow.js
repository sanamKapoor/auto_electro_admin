import React, { useState } from 'react'
import MapModal from '../../Modal/Map';

const ReturnRow = () => {

    const [mapModal, setMapModal] = useState(false);

    return (
        <tr>
            <td>1</td>
            <td>
                <p>Willson</p>
                <p>+91 7867872658</p>
                <p>willson@gmail.com</p>
            </td>
            <td>
                <p>Shoes: 1</p>
                <p>T-Shirts: 2</p>
                <p>Jacket: 1</p>
            </td>
            <td>
                #454 1st Block, Rammurthy, Bangalore-560016 <i className="bi bi-info-circle pointer" onClick={() => setMapModal(true)}></i>
            </td>
            <td>#5005</td>
            <td>Debit Card</td>
            <td>Complete</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita odio aperiam</td>
            <td><span className="text-nowrap">17-04-2021</span></td>
            <MapModal
                show={mapModal}
                setShow={setMapModal}
            />
        </tr>
    )
}

export default ReturnRow
