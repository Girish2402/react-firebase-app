import React, { Component } from 'react'

class CreateProject extends Component {

    state = {
        description: null,
        title: null
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
                        <h4 className="grey-text darken-1">Create New Project</h4>
                    </div>
                    <form className="col s12" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="title" type="text" className="validate" onChange={this.handleOnChange} />
                                <label htmlFor="title">Label</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="description" className="materialize-textarea"></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn pink">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateProject
