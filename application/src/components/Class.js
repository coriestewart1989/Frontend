import React from "react";

export default function Class() {
  // state for popout details

  // changeHandler fn for make axiosWithAuth().put to update api with
  //// attending or not attending

  return (
    <div>
      {/* main class details: name, location, time,
        maxClassSize - Attendees.length(for available spots)*/}
      {/* simple radio input with onClick handler fn for marking themselves as
        attending the class */}
      {/* conditionally rendered button with onClick handler for expansion */}
      <div>
        {/* conditionally rendered portion of card that contains the rest of
          the class details: type, duration, intensity level, (maybe list of
          attendees) */}
        {/* conditionally rendered close button with onClick handler */}
      </div>
    </div>
  );
}
