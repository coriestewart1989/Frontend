import React, { Component } from "react";

export default class SigninForm extends Component {
  // state for form values: username, password

  // change handler fn that destructures name and value from e.target and sets state, spreading formValues and
  //// and updating the variable [name] with the value from event

  // submit handler fn that posts to login api endpoint and pushes to
  //// "/dashboard" route using this.props.history

  // implement some kind of validation, maybe with formik or yup

  render() {
    return (
      <div>
        {/* form element with onSubmit handler fn */}
        {/* input with properties type: text, name: username, value: formValues.username, onChange: this.handleChange */}
        {/* input with properties type: password, name: password, value: formValues.password, onChange: this.handleChange */}
        {/* submit button */}
      </div>
    );
  }
}
