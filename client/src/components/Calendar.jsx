// Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Popover } from "bootstrap";

function Calendar() {
  const events = [
    {
      title: "Hatha Yoga",
      start: "2023-05-18T08:00:00",
      end: "2023-05-18T09:00:00",
      instructor: "John Doe",
      availableSlots: 5,
    },

    {
      title: "Hatha Yoga",
      start: "2023-05-19T10:00:00",
      end: "2023-05-19T11:00:00",
      instructor: "John Doe",
      availableSlots: 5,
    },
    {
      title: "Hatha Yoga",
      start: "2023-05-18T10:00:00",
      end: "2023-05-18T11:00:00",
      instructor: "John Doe",
      availableSlots: 12,
    },

    {
      title: "Vinyasa Yoga",
      start: "2023-05-20T14:00:00",
      end: "2023-05-20T15:00:00",
      instructor: "John Doe",
      availableSlots: 9,
    }


  ];

  const containerStyle = {
    position: "relative",
    display: "inline-block",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div>
      <div style={containerStyle}>
        <img src="https://images.pexels.com/photos/866021/pexels-photo-866021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="image"/>
        <div style={textStyle}>CLASSES</div>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="90vh"
          events={events}
          eventDidMount={(info) => {
            const { title, instructor, availableSlots } = info.event.extendedProps;

            const popoverContent = document.createElement("div");
            popoverContent.innerHTML = `
              <h5>${title}</h5>
              <p>Instructor: ${instructor}</p>
              <p>Available Slots: ${availableSlots}</p>
              <button class="btn btn-primary">Join Yoga</button>
            `;

            return new Popover(info.el, {
              title: info.event.title,
              content: popoverContent,
              trigger: "hover",
              placement: "top",
              html: true,
              boundary: "window",
            });
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;