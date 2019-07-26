import React, { Component } from 'react'

class SignUp extends Component {

	state = {
		email: null,
		password: null,
		first_name: null,
		last_name: null
	}

	handleOnChange = (e) => {
		console.log(e.target.value);
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

  render() {
    return (
      <div className="container sign-up-container">
				<div className="row">
					<div className="row">
						<h4 className="white-text darken-1">Sign Up</h4>
					</div>
					<form className="col s12" onSubmit={this.handleOnSubmit}>
						<div className="row">
							<div className="input-field col s6">
								<input id="first_name" type="text" className="validate" onChange={this.handleOnChange} />
								<label htmlFor="first_name">First Name</label>
							</div>
							<div className="input-field col s6">
								<input id="last_name" type="text" className="validate" onChange={this.handleOnChange} />
								<label htmlFor="last_name">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="email" type="email" className="validate" onChange={this.handleOnChange} />
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" onChange={this.handleOnChange} />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<button className="waves-effect waves-light btn pink">Sign Up</button>
							</div>
						</div>
					</form>
				</div>
			</div>
    )
  }
}

export default SignUp
