import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = ({ data, title, amount, icon }) => {
    return (
        <div className="col-md-6">
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center pb-2">
                    <div>
                        <span className="btn-circle btn-lg btn btn-outline-secondary">
                            <i className={icon}></i>
                        </span>
                    </div>
                    <div className="m-l-10">
                        <h4 className="card-title ">Total {title}</h4>
                        <h4>{amount}</h4>
                    </div>
                    <div className="ml-auto">
                        <select className="custom-select b-0">
                            <option selected="">Weekly</option>
                            <option value="1">Monthly</option>
                        </select>
                    </div>
                </div>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey={title} fill="#2B9D13" />
                </BarChart>
            </div>
        </div>
    </div>
    )
}

export default Graph
