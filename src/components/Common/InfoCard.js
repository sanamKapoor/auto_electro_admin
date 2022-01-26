import React from 'react'

const InfoCard = ({ text, amount }) => {
    return (
    <div className="col-md-3">
        <div className="card rounded shadow-sm">
            <div className="card-body card-box">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>
                        {text}
                    </h5>
                    <h5>
                        {amount}
                    </h5>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InfoCard
