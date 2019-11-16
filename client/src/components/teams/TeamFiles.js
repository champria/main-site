import React, { Component } from "react";

export default class TeamFiles extends Component {
  render() {
    return <div>
      <h3>Team Files:</h3>
      <hr className="my-4"/>
      <ul className="list-unstyled">
    {this.props.files.map(file => {
    return <li ky={file.id}><a href={file.url}>{file.title}.doc</a></li>
    })}
      </ul>
    </div>;
  }
}
