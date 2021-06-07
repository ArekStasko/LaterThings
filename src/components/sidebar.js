import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faLightbulb, faFilm, faPlus, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Btn = styled.button`
background-color: ${({active})=> active ? '#ffffff' : '#161b22'};
color: ${({active})=> active ? '#161b22' : '#ffffff'};
`

const Sidebar = () => {
    const [active, setActive] = useState('Music')

    return(
        <>
        <div className='sidebar'>
            <div className='sidebar__logo'>
            <FontAwesomeIcon className="sidebar__finger-icon" icon={faFingerprint} />
            <p className='sidebar__title'>LaterThings</p>
            </div>
            <div className='sidebar__icons'>
                <Btn active={active === 'Music'} onClick={()=>setActive('Music')} >
                <FontAwesomeIcon className='sidebar-icon' icon={faMusic} />
                </Btn>
                <Btn active={active === 'Ideas'} onClick={()=>setActive('Ideas')} >
                <FontAwesomeIcon className='sidebar-icon' icon={faLightbulb} />
                </Btn>
                <Btn active={active === 'Film'} onClick={()=>setActive('Film')} >
                <FontAwesomeIcon className='sidebar-icon' icon={faFilm} />
                </Btn>
            </div>
            <button className='sidebar__log'>Logout</button>
        </div>
        <button className='add'>
        <FontAwesomeIcon className='add-icon' icon={faPlus} />
        </button>
        </>
    )
}

export default Sidebar