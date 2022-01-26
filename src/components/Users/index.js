import React, { useState } from 'react'
import WarningModal from '../Modal/Warning';
import user from "../../assets/images/users/1.jpg";
import DefaultView from './components/DefaultView';
import DetailedView from './components/DetailedView';

const Users = () => {

    const [warningModal, setWarningModal] = useState(false);
    const [detailView, setDetailView] = useState(false);

    return (
        <div>
            <h4>Users</h4>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <div className="card">
                        {
                            detailView 
                            ?
                            <DetailedView setDetailView={setDetailView} />
                            :
                            <DefaultView setDetailView={setDetailView} setWarningModal={setWarningModal} />
                        }
                    </div>
                </div>
            </div>
            <WarningModal   
                title="Are you sure you want to delete this user ?"
                show={warningModal}
                setShow={setWarningModal}
            />
        </div>
    )
}

export default Users
