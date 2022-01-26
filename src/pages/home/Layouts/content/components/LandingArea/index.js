import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import loadable from "@loadable/component";
import Loader from '../../../../../../components/Common/Loader';

const Landing = ({ selectedSection }) => {

    const [section, setSection] = useState('')

    useEffect(() => {
        if(selectedSection !== ''){
            setSection(loadable(() => import(`../../../../../../components/${selectedSection}`)))
        }
        window.document.title = selectedSection;
    }, [selectedSection])
    
    const renderSection = () => {
        return React.createElement(section)
    }

    return (
        <div className='landing'>
            { 
                section === ''
                ?
                <Loader />
                :
                <>
                    { renderSection() }
                    <Footer />                
                </>
            }
        </div>
    )
}

export default Landing
