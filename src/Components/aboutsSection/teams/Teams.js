import React from "react";
import "./Teams.css";
import LeadCard from "./card/LeadCard";
import {Spring, animated} from "react-spring"

import teamsData from "./teamsData";

const Teams = () => {
  return (
    <div className="teams-container">
      <div className="header">
        <h1 id="team" >The Team</h1>
      </div>
      <Spring 
        from={{width:"0%", opacity: 0}}
        to={{width:"100%", opacity: 1}}
      >
        {(styles) => (
          <animated.div style={styles} >
            <div className="team-grid">
              {teamsData.map((team) => {
                return <LeadCard key={team.id} {...team}></LeadCard>;
              })}
            </div>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default Teams;
