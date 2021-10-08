import React from 'react';
import "./Home.css"
import Landing from "./Components/Landing/landing";
import Competitions from "../../Components/competitions/competitions"

const Home = () => {
    return (
        <div className="home-container" >
            <Landing></Landing>
            <Competitions></Competitions>
        </div>
    )
}

export default Home