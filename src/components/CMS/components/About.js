import React, { useState } from 'react'
import Editor from '../../Common/Editor'

const About = () => {

    const [aboutUs, setAboutUs] = useState({});
    const [updatedAboutUsData, setUpdatedAboutUs] = useState("");

    const setAboutUsData = (content, delta, source, editor) => {
        let updatedAboutUs = editor.getHTML();
        setAboutUs(updatedAboutUs + "");
        setUpdatedAboutUs(updatedAboutUs);
    };

    return (
        <div className="w-100">
            <h4 className='pb-1'>About</h4>
            <div className='mb-5'>
                <Editor
                    value={aboutUs}
                    setData={setAboutUsData}
                />
            </div>
        </div>
    )
}

export default About
