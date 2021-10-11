import React from 'react'
import SpeakerCard from '../cards/speakersLineUpCard/SpeakerCard'
import "./SpeakersLineUp.css"

import speakersData from "./speakersData"

const SpeakersLineUp = () => {
    return (
        <div className="speakers-line-up" >
            <div className="header">
                <h1>Speakers Line Up - Technical Talks</h1>
            </div>
            <div className="speaker-cards">
                {
                    speakersData.map((speaker)=>{
                       return <SpeakerCard key={speaker.id} {...speaker} ></SpeakerCard>
                    })
                }
            </div>
        </div>
    )
}

export default SpeakersLineUp
