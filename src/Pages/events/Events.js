import React from 'react'
import "./Events.css"

import Timeline from '../../Components/eventsSection/timeline/Timeline'
import CompetitionFunContest from '../../Components/eventsSection/competitionFunContest/CompetitionFunContest'
import Workshops from '../../Components/eventsSection/workshops/Workshops'
import SpeakersLineUp from '../../Components/eventsSection/speakerLineUp/SpeakersLineUp'


const Events = () => {
    return (
      <div className="events-container">
        <div className="events-timeline">
          <Timeline></Timeline>
        </div>
          <CompetitionFunContest sectionName="Competitions"></CompetitionFunContest>
          <CompetitionFunContest sectionName="Fun Contests"></CompetitionFunContest>
          <Workshops></Workshops>
          <SpeakersLineUp></SpeakersLineUp>
      </div>
    );
}

export default Events
