import React, { useEffect } from 'react'
import Logo from '../../../../assets/images/A&E.png';

const Aside = ({ sections, icons, toggle, selectedSection, setSelectedSection }) => {

    useEffect(() => {
        if(sections.length > 0){
            setSelectedSection(sections[0])
        }
    }, [sections])

    return (
        <aside className='aside' style={{"width": toggle ? "15vw" : 'auto'}}>
            <div className='logo py-3 px-4 bg text-white'>
                <h3>
                    {toggle ? 'Auto & Electro' : "A&E" }
                </h3>
            </div>
            <div className='mr-2'>
                <ul className='py-4 font-semibold'>
                    {
                        sections.map(section => {
                            return (
                                <li 
                                    className={
                                        `py-3 px-4 pointer ${selectedSection === section ? 'bg-primary mr-4 pill text-light' : ''}`
                                    }
                                    key={section}
                                    id={section}
                                    onClick={(e) => {
                                        setSelectedSection(section)
                                    }}
                                >
                                    <span
                                    >{icons[section]}</span>
                                    <span className='ml-2'>
                                    {toggle ? section : ""}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Aside
