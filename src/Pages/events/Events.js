import React from 'react'
import "./Events.css"

import Timeline from '../../Components/timeline/Timeline'

const Events = () => {
    return (
      <div className="events-container">
        <div className="events-timeline">
          <Timeline></Timeline>
        </div>
      </div>
    );
}

export default Events
