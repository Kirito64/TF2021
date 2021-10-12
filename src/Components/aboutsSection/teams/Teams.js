import React from 'react'
import "./Teams.css"
import LeadCard from './card/LeadCard'

import teamsData from './teamsData'

const Teams = () => {
    return (
        <div className="teams-container" >
            <div className="header">
                <h1>The Team</h1>
            </div>
            <div className="team-grid">
                {
                    teamsData.map((team)=>{
                        return <LeadCard key={team.id} {...team} ></LeadCard>
                    })
                }
            </div>
        </div>
    )
}

export default Teams;
