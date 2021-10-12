import React from 'react'
import "./LeadCard.css"
import polygon from "../assets/polygon.png"
import leadImage from "../assets/lead.png"

const LeadCard = (props) => {

    const {isLead, image,title, name, email} = props;

    return (
      <div className="lead-card">
        <div className="lead-image">
          <img src={image} alt="leadImage" />
          <img src={polygon} alt="designPolygon" />
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
