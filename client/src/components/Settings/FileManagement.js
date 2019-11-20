import React, { Component } from 'react';

class FileManagement extends Component {
    render() {
        return (
            <ul className="list-unstyled">
            <li>
                <div className="row h-100">
                    <div className="col-6">
                        <p>File name</p>
                    </div>
                    <div className="col-6"><button className="btn btn-danger">Delete</button></div>
                </div>
            </li>
        </ul>
        );
    }
}

export default FileManagement;