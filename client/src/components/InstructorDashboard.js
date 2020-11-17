import React from "react";

export default function InstructorDashboard() {
  return (
    <div>
      {/* display user details */}
      {/* conditionally render add/edit classform if optionType is
        instructor */}
      {/* needs an element to click and delete class which will
          have an onClick handler to run a delete req to api with the
          id of the class(this might need to be in Class component) */}
      {/* map over classes and render Class component for each one */}
      {/* needs a button for editing, data-testid="dashboard-edit" */}
      {/* conditionally render edit form for each class */}
      {/* conditionally render list of classes if optionType is
        customer */}
    </div>
  );
}
