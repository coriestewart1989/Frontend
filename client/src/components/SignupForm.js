import React, { Component } from "react";

import Toggle from "./Toggle";

const initialState = {
  username: "",
  password: "",
  role: false,
};

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      formValues: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleRoleChange = (checked) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        role: checked,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...this.state.formValues,
      role: this.state.formValues.role ? 2 : 1,
    };
    console.log(newUser);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.formValues.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.formValues.password}
          onChange={this.handleChange}
        />
        <label htmlFor="instructor">Are you an Instructor?</label>
        <Toggle
          id="instructor"
          checked={this.state.formValues.role}
          onChange={this.handleRoleChange}
          optionLabels={["Yes", "No"]}
        />
        <button>Sign In</button>
      </form>
    );
  }
}
