import React, { useState } from 'react'
import Editor from '../../Common/Editor'

const PrivacyPolicy = () => {

    const [privacyPolicy, setPrivacyPolicy] = useState({});
    const [updatedPrivacyPolicyData, setUpdatedPrivacyPolicy] = useState("");

    const setPrivacyPolicyData = (content, delta, source, editor) => {
        let updatedPrivacyPolicy = editor.getHTML();
        setPrivacyPolicy(updatedPrivacyPolicy + "");
        setUpdatedPrivacyPolicy(updatedPrivacyPolicy);
    };

    return (
        <div className="w-100">
            <h4 className='pb-1'>PrivacyPolicy</h4>
            <div className='mb-5'>
                <Editor
                    value={privacyPolicy}
                    setData={setPrivacyPolicyData}
                />
            </div>
        </div>
    )
}

export default PrivacyPolicy
