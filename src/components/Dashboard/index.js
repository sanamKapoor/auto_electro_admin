import React from 'react'
import { DashboardCard, EarningGraphData, UserGraphData, OrderGraphData } from '../../data'
import Graph from '../Common/Graph'
import InfoCard from '../Common/InfoCard'

const Dashboard = () => {
    return (
        <div>
            <h4>Dashboard</h4>
            <div className='row mt-4'>
            {
                DashboardCard.map(card => (
                    <InfoCard key={card.amount} text={card.text} amount={card.amount} />
                ))
            }
            </div>
            <div className='row mt-4'>
                <Graph data={EarningGraphData} title="Earning" amount={900} icon="bi bi-cash" />
                <Graph data={UserGraphData} title="Users" amount={500} icon="bi bi-people" />
                <Graph data={OrderGraphData} title="Orders" amount={100} icon="bi bi-box-seam" />
            </div>
        </div>
    )
}

export default Dashboard
