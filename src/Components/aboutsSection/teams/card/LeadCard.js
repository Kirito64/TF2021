import React from 'react'
import "./LeadCard.css"
import {ReactComponent as Polygon} from "../assets/polygon.svg"

const LeadCard = (props) => {

    const {isLead, image,title, name, email} = props;

    return (
      <div className="lead-card">
        <div className="lead-image">
          <img src={image} alt={name} />
          <div className="glow"></div>
        </div>
        <div className="lead-details">
          <h2>{title}</h2>
          <h3>{!isLead ? `Lead: ${name}` : `${name}` }</h3>
          <a href="mailto:">
              <h4>{email}</h4>
          </a>
        </div>
      </div>
    );
}

export default LeadCard
