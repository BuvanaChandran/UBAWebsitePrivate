import React from "react";
import "./EventListingComponent.css";
import { Link } from "react-router-dom";
export default function EventListingComponent({ event }) {
  let eventDate = new Date(event.eventDate.date);
  let currentDate = new Date();
 
  let dateDiff = eventDate.getTime() - currentDate.getTime();
  let dateDiffVal = Math.round(dateDiff / (1000 * 60 * 60 * 24));

  function parseTime(timeString) {
    var part = timeString.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
    var hh = parseInt(part[1], 10);
    var mm = parseInt(part[2], 10);
    var ap = part[3] ? part[3].toUpperCase() : null;
    if (ap === "AM") {
      if (hh === 12) {
        hh = 0;
      }
    }
    if (ap === "PM") {
      if (hh !== 12) {
        hh += 12;
      }
    }
    return { hh: hh, mm: mm };
  }
  let eventTime = parseTime(event.eventDate.time);
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let timeDiff =
    eventTime.hh * 60 + eventTime.mm - (currentHour * 60 + currentMinute);
  let eventStatus = "COMPLETED";
  /*console.log(event.eventDate.date)
  console.log(dateDiffVal);
  console.log(eventTime);
  console.log(timeDiff);
  */
  if ((timeDiff > 0 && dateDiffVal === 0) || dateDiffVal > 0)
    eventStatus = "UPCOMING";
  return (
    <div className="event-listing-component" title="click to view event">
      <Link
        to={"/events/" + event.title}
        className="event-listing-component-link"
      >
        <img
          src={event.images[0].src}
          className="event-listing-component-image"
          alt="event-img"
        />
        <p className="event-listing-component-heading">{event.title}</p>
        <div className="event-listing-component-status">
          <div>
            <p className="event-listing-component-timing">
              {event.eventDate.date}
            </p>
            <p className="event-listing-component-timing">
              {event.eventDate.time}
            </p>
          </div>
          <p className="event-listing-component-status-type">{eventStatus}</p>
        </div>
      </Link>
    </div>
  );
}
