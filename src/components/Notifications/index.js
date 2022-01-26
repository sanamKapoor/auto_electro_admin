import React, { useState } from 'react'
import DefaultView from './components/DefaultView';
import HistoryView from './components/HistoryView';

const Notification = () => {

    const [showHistory, setShowHistory] = useState(false);

    return (
        <div>
            <h4>Notification {showHistory ? 'History' : ''}</h4>
            <div className="card mt-4">
                { 
                showHistory ?
                <HistoryView setShowHistory={setShowHistory} />
                :    
                <DefaultView setShowHistory={setShowHistory} />
                }
            </div>
        </div>
    )
}

export default Notification
