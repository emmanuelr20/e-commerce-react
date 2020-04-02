import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    return !this.props.context.user ? (
      <div className="login">
        <h4 className="title">Login</h4>
        <div className="form-field">
          <label>User Name: </label>
          <input type="text" name="username" onChange={this.handleChange} />
        </div>
        <div className="form-field">
          <label>Password: </label>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <div className="form-field">
          <button onClick={() => this.props.context.login(username, password)}>
            Submit
          </button>
        </div>
      </div>
    ) : (
      <Redirect to="/products" />
    );
  }
}

export default withContext(Login);
