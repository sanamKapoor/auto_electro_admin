import React, { useState } from 'react'

import Contact from './components/Contact';
import About from './components/About';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';


const SECTIONS = {
    TC: "TC",
    POLICY: "POLICY",
    ABOUT: "ABOUT",
    CONTACT: "CONTACT"
}

const Cms = () => {

    const [activeSection, setActiveSection] = useState(SECTIONS.TC);

    const renderContent = () => {
        switch(activeSection){
            case SECTIONS.TC:
                return <TermsAndConditions />
            case SECTIONS.POLICY:
                return <PrivacyPolicy />
            case SECTIONS.CONTACT:
                return <Contact />
            case SECTIONS.ABOUT:
                return <About />
            default:
                return <TermsAndConditions />
        }
    }

    return (
        <div>
            <h4>CMS</h4>
            <div className='card mt-4'>
                <div className='row pt-4 px-4'>
                    <button 
                        className={`btn ${activeSection === SECTIONS.TC && 'btn-primary'}`}
                        onClick={() => setActiveSection(SECTIONS.TC)}
                    >Terms and Conditions</button>
                    <button 
                        className={`btn ${activeSection === SECTIONS.POLICY && 'btn-primary'} mx-2`}
                        onClick={() => setActiveSection(SECTIONS.POLICY)}
                    >Privacy Policy</button>
                    <button 
                        className={`btn ${activeSection === SECTIONS.CONTACT && 'btn-primary'} mx-2`}
                        onClick={() => setActiveSection(SECTIONS.CONTACT)}
                    >Contact</button>
                    <button 
                        className={`btn ${activeSection === SECTIONS.ABOUT && 'btn-primary'} mx-2`}
                        onClick={() => setActiveSection(SECTIONS.ABOUT)}
                    >About</button>
                </div>
                <hr />
                <div className='row px-4 pb-3'>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Cms
