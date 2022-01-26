import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/LandingArea'

const Content = ({ toggle, setToggle, selectedSection, setSelectedSection }) => {
    return (
        <section style={{"width": toggle ? "85vw" : '100%'}} className='showcase'>
            <Header toggle={toggle} setToggle={setToggle} setSelectedSection={setSelectedSection} />
            <Landing selectedSection={selectedSection} />
        </section>
    )
}

export default Content
