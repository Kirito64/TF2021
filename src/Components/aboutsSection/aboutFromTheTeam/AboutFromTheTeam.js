import React from 'react'
import "./AboutFromTheTeam.css"

import Card from "../../../Components/fromTheTeam/card/Card"
import fromTheTeamData from '../../fromTheTeam/FromTheTeamData'

const AboutFromTheTeam = () => {
    return (
      <div className="from-team">
          <div className="header">
              <h1>From The Team</h1>
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
