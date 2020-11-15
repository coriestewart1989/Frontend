import React, { Component } from "react";

export default class ClassForm extends Component {
  // initial state for formValues, name, type, start time, duration, intensity
  //// level, location, attendees, max class size

  // change handler fn that destructures name and value from e.target and
  //// sets state, spreading formValues and
  //// and updating the variable [name] with the value from event

  // submit handler fn that puts to api endpoint and dispatches edit classes
  //// action to reducer and toggles isEditing state of parent component with
  //// setIsEditing prop

  // click handler that takes event as argument and prevents default
  //// behavior and stops propagation of event bubbling to parent element;
  //// then clear form and toggle isEditing state of parent component

  // implement some kind of validation, maybe with formik or yup

  render() {
    return (
      <div>
        {/* form element with submit handler fn, data-testid="class-form" */}
        {/* input element with properties type: text, name: name, value:
          this.state.formValues.name, onChange: this.handleChange,
          data-testid="class-form-name" */}
        {/* input element with properties type: text, name: type, value:
          this.state.formValues.type, onChange: this.handleChange,
          data-testid="class-form-type" */}
        {/* input element with properties type: text, name: startTime, value:
          this.state.formValues.startTime, onChange: this.handleChange,
          data-testid="class-form-time" */}
        {/* input element with properties type: text, name:  duration, value:
          this.state.formValues.duration, onChange: this.handleChange,
          data-testid="class-form-duration" */}
        {/* input element with properties type: text, name: intensity, value:
          this.state.formValues.intensity, onChange: this.handleChange,
          data-testid="class-form-intensity" */}
        {/* input element with properties type: text, name: location, value:
          this.state.formValues.location, onChange: this.handleChange,
          data-testid="class-form-location" */}
        {/* input element with properties type: text, name: maxClassSize, value:
          this.state.formValues.maxClassSize, onChange: this.handleChange,
          data-testid="class-form-size" */}
        {/* confirm button, data-testid="class-form-submit" */}
        {/* cancel button with click handler, data-testid="class-fom-cancel" */}
      </div>
    );
  }
}
