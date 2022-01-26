import React, { useState } from 'react'
import Editor from '../../Common/Editor';

const DefaultView = ({ setShowHistory }) => {
    
    const [notificationSelect, setNotificationSelect] = useState(false);
    const [usersSelect, setUsersSelect] = useState(false);
    const [dropDownTitle, setDropDownTitle] = useState('Send Notification')

    const [content, setContent] = useState({});
    const [updatedContentData, setUpdatedContent] = useState("");

    const setContentData = (content, delta, source, editor) => {
        let updatedContent = editor.getHTML();
        setContent(updatedContent + "");
        setUpdatedContent(updatedContent);
    };

    return (
        <div className="card-body row">
        <div className="col-md-6">
            <div className='d-flex justify-content-between align-items-start'>
                <h5>Send Notification</h5>
                <button className="btn btn-primary" onClick={() => setShowHistory(true)}>View Notification History</button>
            </div>
            <div className='mt-4'>
                    <button className="btn btn-primary w-50 d-flex justify-content-between" type="button" id="dropdownMenuButton1" onClick={() => setNotificationSelect(!notificationSelect)}>
                        {dropDownTitle} <i className="bi bi-caret-down"></i>
                    </button>
                    {
                        notificationSelect &&
                        <ul className='border bg-white w-50'>
                            <li>
                                <span className="dropdown-item" onClick={(e) => {
                                    setDropDownTitle(e.target.innerHTML)
                                    setNotificationSelect(false)
                                }}>All Users</span>
                            </li>
                            <li>
                                <span className="dropdown-item" onClick={(e) => {
                                    setDropDownTitle(e.target.innerHTML)
                                    setNotificationSelect(false)
                                }}>Specific User</span>
                            </li>
                        </ul>
                    }
            </div>
            {
                dropDownTitle === 'Specific User' &&
                <div className='mt-5'>
                        <button className="btn btn-primary w-50 d-flex justify-content-between" type="button" id="dropdownMenuButton1" onClick={() => setUsersSelect(!usersSelect)}>
                            Select Users <i className="bi bi-caret-down"></i>
                        </button>
                        {
                            usersSelect &&
                            <ul className='border bg-white w-50' style={{"maxHeight": "130px", "overflowY": "auto"}}>
                                <li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li>
                                <li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li>
                                <li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li><li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li><li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li><li>
                                    <span className="dropdown-item d-flex align-items-center">
                                        <input type="checkbox" className='mr-2' /> user1@gmail.com
                                    </span>
                                </li>
                            </ul>
                        }
                </div>
            }
        </div>
        <form className="form-horizontal form-material col-md-6">
                <div className="form-group">
                    <label>Heading</label>
                    <input type="text" className="form-control form-control-line" placeholder="Subject" />
                </div>
                <div className="form-group pb-3">
                    <label>Content</label>
                    <Editor
                        height="100px"
                        value={content}
                        setData={setContentData}
                    />
                </div>
                <button type="submit" className="btn btn-success mt-5"> Send</button>
        </form>
    </div>
    )
}

export default DefaultView
