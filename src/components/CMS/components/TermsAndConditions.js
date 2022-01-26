import React, { useState } from 'react'
import Editor from '../../Common/Editor'

const TermsAndConditions = () => {

    const [termsAndConditions, setTermsAndConditions] = useState({});
    const [updatedTermsAndConditionsData, setUpdatedTermsAndConditions] = useState("");

    const setTermsAndConditionsData = (content, delta, source, editor) => {
        let updatedTermsAndConditions = editor.getHTML();
        setTermsAndConditions(updatedTermsAndConditions + "");
        setUpdatedTermsAndConditions(updatedTermsAndConditions);
    };

    return (
        <div className="w-100">
            <h4 className='pb-1'>TermsAndConditions</h4>
            <div className='mb-5'>
                <Editor
                    value={termsAndConditions}
                    setData={setTermsAndConditionsData}
                />
            </div>
        </div>
    )
}

export default TermsAndConditions
