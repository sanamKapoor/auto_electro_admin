import React, { useState } from 'react'
import { Icons, AsideSections } from '../../data'
import Aside from './Layouts/aside'
import Content from './Layouts/content'

const Home = () => {

    const [toggle, setToggle] = useState(true);
    const [selectedSection, setSelectedSection] = useState('');

    return (
        <div className='d-flex home-page'>
            <Aside 
                sections={AsideSections} 
                icons={Icons} 
                toggle={toggle} 
                selectedSection={selectedSection} 
                setSelectedSection={setSelectedSection}
            />
            <Content 
                toggle={toggle} 
                setToggle={setToggle}  
                selectedSection={selectedSection} 
                setSelectedSection={setSelectedSection}
            />
        </div>
    )
}

export default Home
