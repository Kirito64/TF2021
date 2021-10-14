import React from 'react'
import "./Workshops.css"

import EventCard from '../cards/eventCard/EventCard'
import workshopsData from "./workshopsData"

const workshops = () => {

    return (
        <div className="workshops-section">
          <div className="header">
            <h1>Workshops</h1>
          </div>
          <div className="workshop-cards">
            {workshopsData.map((workshop) => {
              return <EventCard key={workshop.id} {...workshop}></EventCard>;
            })}
          </div>
        </div>
    );
}

export default workshops