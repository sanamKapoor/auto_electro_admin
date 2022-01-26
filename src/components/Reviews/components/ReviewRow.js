import React, { useState } from 'react'
import img from "../../../assets/images/users/2.jpg";
import StarRating from '../../Common/StarRating';
import TextModal from '../../Modal/Text';
import WarningModal from '../../Modal/Warning';

const ReviewRow = () => {

    const [readMore, setReadMore] = useState(false);
    const [warningModal, setWarningModal] = useState(false);

    return (
        <tr>
            <td>
                <img src={img} alt="" width="60" className="rounded-circle" />
            </td>
            <td>Ronny </td>
            <td>Hannagover@gmail.com </td>
            <td>
                <p className="text-warning mb-0 text-nowrap"> 
                    <StarRating rating={4} />
                </p>
            </td>
            <td>Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content..... <u className='pointer' onClick={() => setReadMore(true)}>Read More</u></td>
            <td>
                <p>Cat No: #123654</p>
                <p> Name : Shoes </p>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => setWarningModal(true)}><i className="bi bi-trash"></i></button>
            </td>
            <TextModal 
                show={readMore}
                setShow={setReadMore}
                review={'Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content'}
            />
            <WarningModal 
                show={warningModal}
                setShow={setWarningModal}
                title="Are you sure you want to delete this review ?"
            />
        </tr>
    )
}

export default ReviewRow
