import React, {useEffect} from 'react'
import "./AboutFromTheTeam.css"

import Card from "../../../Components/fromTheTeam/card/Card"
import fromTheTeamData from '../../fromTheTeam/FromTheTeamData'
import Aos from "aos";
import "aos/dist/aos.css";

const AboutFromTheTeam = () => {

    useEffect(() => {
      Aos.init({ duration: 800 });
    }, []);

    return (
      <div className="from-team">
        <div className="header">
          <h1 id="fromTheTeam">From The Team</h1>
        </div>
        <div className="cards">
          {fromTheTeamData.map((info) => {
            return <Card key={info.id} {...info}></Card>;
          })}
        </div>
      </div>
    );
}

export default AboutFromTheTeam
