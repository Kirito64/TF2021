import React from 'react';
import "./Home.css"
import Landing from "./Components/Landing/landing";
import FromTheTeam from '../../Components/fromTheTeam/FromTheTeam';
import Competitions from "../../Components/competitions/competitions"
import TechTalks from "../../Components/techTalks/TechTalks"

const Home = () => {
    return (
        <div className="home-container" >
            <Landing></Landing>
            <FromTheTeam></FromTheTeam>
            <Competitions></Competitions>
            <TechTalks></TechTalks>
        </div>
    )
}

export default Home;