import React, { Component } from 'react';

class AddContact extends Component {
    render() {
        return (
            <div className="text-left" id="addContact">
               <button className="btn button" disabled><i className="fas fa-plus-circle"></i> Add Contact </button>
            </div>
        );
    }
}

export default AddContact;