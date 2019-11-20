import React, { Component } from 'react';

class MemberForm extends Component {
    state={
        username:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="member-add-form">
                <form className="form-group row">
                <div className="col-md-8">
                <input
                placeholder="Enter username"
            className="form-control"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
            />
                </div>
            <div className="col-md-4">
            <button className="btn button">Add Player</button>
            </div>
                </form>
            </div>
        );
    }
}

export default MemberForm;