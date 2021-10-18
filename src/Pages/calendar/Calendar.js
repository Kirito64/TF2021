import React, { useState, useEffect, useRef } from "react";
import "./Calendar.css";

import calendarData from "./calendarData";
import { HashLink } from "react-router-hash-link";

const Calendar = () => {
  const [heading, setHeading] = useState("CALENDAR");
  const modifiedCalendarData = calendarData.slice(0, 30);
  const [data, setData] = useState(calendarData);
  const [isClose, setisClose] = useState(false);

  const openedBtn = useRef([]);

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
    "mainevents",
  ];

  let val = calendarData.filter((event) => event.type.includes("techtalk"));

  // console.log(val[0].type[0].toUpperCase());

  const Sort = (e) => {
    e.preventDefault();
    const type = e.target.innerText;
    // console.log(e.target.innerText);
    setHeading(type.toUpperCase());

    const sortedData = calendarData.filter((event) =>
      event.type.includes(e.target.innerText)
    );

    if (sortedData.length !== 0) {
      setData(sortedData);
    } else {
      setData(calendarData);
    }
  };

  const SortStatus = (e) => {
    e.preventDefault();
    const currentStatus = e.target.className;

    setHeading(e.target.className.toUpperCase());

    // console.log(currentStatus);
    const isLiveData = calendarData.filter(
      (event) =>
        checkIsLive(
          event.day,
          event.endDay ? event.endDay : event.day,
          event.startHour,
          event.startMinute,
          event.endHour,
          event.endMinute
        ) === true
    );

    const isUpcomingData = calendarData.filter(
      (event) =>
        checkIsUpcoming(event.day, event.startHour, event.startMinute) === true
    );

    const isEndedData = calendarData.filter(
      (event) =>
        checkIsLive(
          event.day,
          event.endDay ? event.endDay : event.day,
          event.startHour,
          event.startMinute,
          event.endHour,
          event.endMinute
        ) === false &&
        checkIsUpcoming(event.day, event.startHour, event.startMinute) === false
    );

    if (e.target.className === "live") {
      if (isLiveData.length !== 0) {
        setData(isLiveData);
      } else {
        setData([]);
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
  };


  // Google Calendar Button
  const buttonsRef = useRef([]);

  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, calendarData.length + 1);
  }, [calendarData]);

  const displayButton = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.style.transform === "rotateZ(135deg)") {
      e.target.style.transform = "rotateZ(0deg)";
      e.target.style.color = "palegoldenrod";
    } else {
      e.target.style.transform = "rotateZ(135deg)";
      e.target.style.color = "white";
    }

    if (buttonsRef.current[e.target.id].classList.contains("displayed")) {
      buttonsRef.current[e.target.id].classList.remove("displayed");
    } else {
      buttonsRef.current[e.target.id].classList.add("displayed");
    }
  };

  // Live, Upcoming, Ended Functionality

  var newCurrentTime = new Date();
  var newCurrentDate =
    newCurrentTime.getFullYear() +
    "-" +
    (newCurrentTime.getMonth() + 1) +
    "-" +
    newCurrentTime.getDate();

  const checkIsLive = (
    day,
    endDay,
    startHour,
    startMinute,
    endHour,
    endMinute
  ) => {
    return newCurrentTime >=
      new Date(2021, 9, day, startHour, startMinute, 1) &&
      newCurrentTime <=
        new Date(2021, 9, endDay ? endDay : day, endHour, endMinute, 1)
      ? true
      : false;
  };

  const checkIsUpcoming = (day,startHour,startMinute)=>{
    return newCurrentTime < new Date(2021, 9, day, startHour, startMinute, 1); 
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
                  {event.type.includes("hackofuturista") ? (
                    <p style={{ color: "cyan", lineHeight: "1.6rem" }}>
                      Hack-o-Futurista
                    </p>
                  ) : (
                    ""
                  )}
                  {event.type.includes("designathon") ? (
                    <p style={{ color: "violet", lineHeight: "1.6rem" }}>
                      Designathon
                    </p>
                  ) : (
                    ""
                  )}
                  {event.type.includes("techtalk") ? (
                    <p style={{ color: "#f7e4c7", lineHeight: "2.2rem" }}>
                      {event.speaker}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="status">
                  <p>
                    {checkIsLive(
                      event.day,
                      event.endDay ? event.endDay : event.day,
                      event.startHour,
                      event.startMinute,
                      event.endHour,
                      event.endMinute
                    ) ? (
                      <span style={{ background: "#17d77f" }}></span>
                    ) : checkIsUpcoming(
                        event.day,
                        event.startHour,
                        event.startMinute
                      ) ? (
                      <span style={{ background: "yellow" }}></span>
                    ) : (
                      <span style={{ background: "red" }}></span>
                    )}
                  </p>
                </div>
                <div className="number">
                  <p>{index + 1}</p>
                </div>
                {(
                  checkIsUpcoming(
                    event.day,
                    event.startHour,
                    event.startMinute
                  ) === true
                ) ? (
                  <div>
                    {" "}
                    <div
                      id={`${event.id}`}
                      data-after-content={`Add ${event.title} to google calendar`}
                      className="add-to-gc"
                      onClick={displayButton}
                    >
                      +
                    </div>
                    <div
                      ref={(el) => (buttonsRef.current[event.id] = el)}
                      className="add-to-gc-btn displayed"
                    >
                      <a
                        target="_blank"
                        href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
                          event.title
                        )}&details=Attend%20the%20event%20for%20${encodeURIComponent(
                          event.title
                        )}%20${event.type.includes("techtalk") ? "by" : ""}%20${event.speaker ? event.speaker : "hosted by Tantrafiesta 2k21"}%2C%20Thanks!&location=TantraFiesta2k21%20IIITN&dates=202110${
                          event.day
                        }T${event.startHour}${event.startMinute}00/202110${
                          event.endDay ? event.endDay : event.day
                        }T${event.endHour}${event.endMinute}`}
                      >
                        <button>Add to Google Calendar</button>
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back-btn">
        <HashLink to="/events" smooth>
          <span>{`Back <<`}</span>
        </HashLink>
      </div>
    </div>
  );
};

export default Calendar;
