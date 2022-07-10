import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/events.css";
import { Appbar } from "../component/Appbar/Appbar";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
];
const Events = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  const createCalendar = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f1b487ba3fmsh8673b2492246479p1ceecbjsn09ec8eb005f5",
      "X-RapidAPI-Host": "calendar22.p.rapidapi.com",
    },
    body: JSON.stringify(allEvents),
  };

  fetch("https://calendar22.p.rapidapi.com/v1/calendars", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  const addEvent = async () => {
    try {
      const response = await fetch(
        "https://calendar22.p.rapidapi.com/v1/calendars/7faec8c9-7202-4be5-9fc4-0de4e0d31d5f/events",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "f1b487ba3fmsh8673b2492246479p1ceecbjsn09ec8eb005f5",
            "X-RapidAPI-Host": "calendar22.p.rapidapi.com",
          },
          body: JSON.stringify(newEvent),
        }
      );
      if (response.ok) {
        const data = response.json();
        console.log(data);
        return true;
      }
    } catch (error) {
      throw Error("error on calendar api");
    }
  };
  const getEvent = async () => {
    try {
      const response = await fetch(
        "https://calendar22.p.rapidapi.com/v1/calendars/7faec8c9-7202-4be5-9fc4-0de4e0d31d5f/events?startTime=2022-01-01T00%3A00%3A01Z&endTime=2022-01-03T00%3A00%3A01Z"
      );
      if (response.ok) {
        const data = await response.json();
        setAllEvents(data);
      }
    } catch (error) {
      throw Error(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="body">
        <div className="App1">
          <h1 style={{ color: "white" }}>Calendar</h1>
          <div>
            <input
              className="Title"
              type="text"
              placeholder="Add Event"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <DatePicker
              className="Start"
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              className="End"
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <button
              className="addevent"
              stlye={{ marginTop: "10px" }}
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Events;
