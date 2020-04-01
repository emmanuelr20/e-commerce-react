import React, { Component } from 'react';

export class Login extends Component {
	
	handleChange = e => this.setState({[e.target.name]: e.target.value})

	render() {
		return (
			<div className="login">
				<div className="form-field">
					<label>User Name: </label>
					<input type="text" />
				</div>
				<div className="form-field">
					<label>Password: </label>
					<input type="password" />
				</div>
				<div className="form-field">
					<button>Submit</button>
				</div>
			</div>
		);
	}
}
