import React from 'react'
import { RevenueCard } from '../../data'
import InfoCard from '../Common/InfoCard'
import Pagination from '../Common/Pagination'
import RevenueRow from './components/RevenueRow'

const Revenue = () => {
    return (
        <div>
            <h4>Revenue</h4>
            <div className='row mt-4'>
                {
                    RevenueCard.map(card => (
                        <InfoCard key={card.amount} text={card.text} amount={card.amount} />
                    ))
                }
            </div>
            <div className='row mt-4 border p-3'>
                <button className='btn btn-primary'>Payment Received</button>
                <button className='btn btn-primary ml-2'>Payment Refunds</button>
                <div className="card-body w-100">
                    <table className="table v-middle product-overview" id="zero_config">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order No</th>
                                <th>Customer Details</th>
                                <th>Ordered Items</th>
                                <th>Payment Method</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RevenueRow />
                            <RevenueRow />
                        </tbody>
                    </table>
                    <hr />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Revenue
