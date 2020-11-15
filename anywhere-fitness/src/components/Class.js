import React from "react";

export default function Class() {
  // state for popout details

  // changeHandler fn for making axiosWithAuth().put to update api with
  //// attending or not attending

  return (
    {/* div need data-testid="class" */}
    <div>
      {/* main class details: name, location, time, data-testid:
        "class-detail" for all three elements */}
      {/* simple radio input with onClick handler fn for marking themselves as
        attending the class, data-testid: "class-attending-radio" */}
      {/* conditionally rendered button with onClick handler for expansion,
        data-testid="class-show-button" */}
      <div>
        {/* conditionally rendered portion of card that contains the rest of
          the class details: type, duration, intensity level, (maybe list of
          attendees), maxClassSize - Attendees.length(for available spots),
          num of attendees, data-testid="class-detail" for all elements her */}
        {/* conditionally rendered close button with onClick handler,
          data-testid="class-hide-button" */}
      </div>
    </div>
  );
}
