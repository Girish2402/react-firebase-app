import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email: null,
        password: null
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
        <div className="container sign-in-container">
            <div className="row">
                <form className="col s12" onSubmit={this.handleOnSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={this.handleOnChange}/>
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

export default SignIn
