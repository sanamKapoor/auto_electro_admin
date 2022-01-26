import React, { useState } from 'react'
import TextModal from '../../Modal/Text';

const HistoryRow = () => {
    const [readMore, setReadMore] = useState(false);

    return (
        <tr>
            <td>
                1
            </td>
            <td>Ronny </td>
            <td>Hannagover@gmail.com </td>
            <td>+91 7865789876</td>
            <td>Order has delivered</td>
            <td>Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content..... <u className='pointer' onClick={() => setReadMore(true)}>Read More</u></td>
            <TextModal 
                show={readMore}
                setShow={setReadMore}
                review={'Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content'}
            />
        </tr>
    )
}

export default HistoryRow
