import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <nav className = "Sidebar">
            <ul className="Sidebar__list">
                <li className="Sidebar__list-items">
                    <a href="" className="Sidebar__links">Home</a>
                    <a href="" className="Sidebar__links">About</a>
                    <a href="" className="Sidebar__links">Projects</a>
                    <a href="" className="Sidebar__links">Experience</a>
                    <a href="" className="Sidebar__links">Skills</a>
                    <a href="" className="Sidebar__links">Academics</a>
                    <a href="" className="Sidebar__links">contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
