import React, {useEffect} from 'react'
import SpeakerCard from '../cards/speakersLineUpCard/SpeakerCard'
import "./SpeakersLineUp.css"
import speakersData from "./speakersData"
import {Spring, animated} from "react-spring"
import Aos from "aos"
import "aos/dist/aos.css"

const SpeakersLineUp = () => {

    useEffect(()=>{
      Aos.init({duration:1200})
    }, [])

    return (
      <div className="speakers-line-up">
        <div className="header">
          <h1 id="techTalks">Speakers Line Up - Technical Talks</h1>
        </div>
        <div className="speaker-cards">
          {speakersData.map((speaker) => {
            return (
              <Spring
                key={speaker.id}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <SpeakerCard {...speaker}></SpeakerCard>
                  </animated.div>
                )}
              </Spring>
            );
          })}
        </div>
      </div>
    );
}

export default SpeakersLineUp
