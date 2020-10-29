import React from 'react'
import './Home.scss'
import program from '../../assets/programmer.png'

const Home = () => {
    return (
        <div className = "home">
            <div className="home__imagebox">
                <img src={program} alt="" className="home__image"/>
            </div>
        </div>
    )
}

export default Home
