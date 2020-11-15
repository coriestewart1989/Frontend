import React, { Component } from "react";

import Toggle from "./Toggle";
export default class SignupForm extends Component {
  // initial state for formValues: username, password,
  // useState for role: customer or instructor
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        username: "",
        password: "",
        instructor: false,
      },
    };
  }

  // change handler fn for role toggle switch
  onInstructorChange(checked) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        instructor: checked,
      },
    });
  }

  // change handler fn that destructures name and value from e.target and sets state, spreading formValues and
  //// and updating the variable [name] with the value from event

  // submit handler fn that posts to login api endpoint and pushes to
  //// "/dashboard" route using this.props.history

  // implement some kind of validation, maybe with formik or yup

  render() {
    return (
      <div>
        SignupForm
        {/* form element with onSubmit handler fn */}
        {/* input with properties type: text, name: username, value: formValues.username, onChange: this.handleChange */}
        {/* input with properties type: password, name: password, value: formValues.password, onChange: this.handleChange */}
        {/* toggle for role: instructor or customer */}
        <Toggle
          id="instructor"
          checked={this.state.formValues.instructor}
          onChange={this.onInstructorChange}
        />
        <label htmlFor="instructor">Instructor</label>
        {/* submit button */}
      </div>
    );
  }
}
