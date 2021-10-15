import React, {useState} from "react";
import "./Calendar.css"

import calendarData from "./calendarData";
import { HashLink } from "react-router-hash-link";

const Calendar = () => {

    const [heading, setHeading] = useState("CALENDAR")
    const [data, setData] = useState(calendarData)

  const Tags = [
    "calendar",
    "gaming",
    "hackofuturista",
    "designathon",
    "funcontest",
    "quiz",
    "workshops",
    "techtalk",
    "sessions",
    "mainevents"
  ];

  let val = calendarData.filter((event) => event.type.includes("techtalk"));

  console.log(val[0].type[0].toUpperCase());

  const Sort = (e)=>{
    e.preventDefault()
    const type = e.target.innerText;
    console.log(e.target.innerText)
    setHeading(type.toUpperCase())

    const sortedData = calendarData.filter((event) =>
      event.type.includes(e.target.innerText)
    );

    if(sortedData.length !== 0){
        setData(sortedData)
    }
    else{
        setData(calendarData)
    }
  }

  const SortStatus = (e)=>{
    e.preventDefault()
    const currentStatus = e.target.className;

    setHeading(e.target.className.toUpperCase())

    console.log(currentStatus)
    const isLiveData = calendarData.filter((event) =>
      event.isLive === true
    );

    const isUpcomingData = calendarData.filter((event) => event.isUpcoming === true);

    const isEndedData = calendarData.filter((event) => event.isLive === false && event.isUpcoming === false);

    if(e.target.className === "live"){
        if(isLiveData.length !== 0){
            setData(isLiveData)
        }
        else{
            setData([])
            setHeading(
              `Sorry there are no ${e.target.className.toUpperCase()} events`
            );
        }
    }

    if (e.target.className === "upcoming") {
      if (isUpcomingData.length !== 0) {
        setData(isUpcomingData);
      } else {
        setData([]);
        setHeading(
          `Sorry there are no ${e.target.className.toUpperCase()} events`
        );
      }
    }

    if (e.target.className === "ended") {
      if (isEndedData.length !== 0) {
        setData(isEndedData);
      } else {
        setData([]);
        setHeading(
          `Sorry there are no ${e.target.className.toUpperCase()} events`
        );
      }
    }

    
  }

  return (
    <div className="calendar">
      <div className="time-status">
        <div className="live" onClick={SortStatus}>
          <p className="live">Live</p>{" "}
          <span className="live" style={{ background: "#17d77f" }}></span>{" "}
        </div>
        <div className="upcoming" onClick={SortStatus}>
          <p className="upcoming">Upcoming</p>{" "}
          <span className="upcoming" style={{ background: "yellow" }}></span>{" "}
        </div>
        <div className="ended" onClick={SortStatus}>
          <p className="ended">Ended</p>{" "}
          <span className="ended" style={{ background: "red" }}></span>{" "}
        </div>
      </div>
      <div className="tags">
        {Tags.map((tag, index) => {
          return <button key={index} onClick={Sort}>{`${tag}`}</button>;
        })}
      </div>
      <div className="calendar-content">
        <div className="header">
          <h1>{heading}</h1>
        </div>
        <div className="content-cards">
          {data.map((event, index) => {
            return (
              <div key={event.id} className="card">
                <div className="card-title">
                  <h2>{event.title}</h2>
                </div>
                <div className="card-date">
                  <h3>{event.date}</h3>
                </div>
                <div className="card-time">
                  <h4>{event.time}</h4>
                </div>
                <div className="status">
                  <p>
                    {event.isLive ? (
                      <span style={{ background: "#17d77f" }}></span>
                    ) : event.isUpcoming ? (
                      <span style={{ background: "yellow" }}></span>
                    ) : (
                      <span style={{ background: "red" }}></span>
                    )}
                  </p>
                </div>
                <div className="number">
                  <p>{index + 1}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="back-btn">
        <HashLink to="/events" smooth >
          <span>{`Back <<`}</span>
        </HashLink>
      </div>
    </div>
  );
};

export default Calendar;
