import React, { Component } from "react";

class Contact extends Component {
  state = {
    lastMessage: []
  };

  componentDidMount() {
    this.setState({
      lastMessage: this.props.contact[this.props.contact.length - 1]
    });
  }

  handleClick() {
    this.props.messageSelector(this.props.contact);
  }

  render() {
    return (
      <div className="contact-container" onClick={() => this.handleClick()}>
        {this.state ? (
          // opnce the component has mounted, display this data
          <div>
            <div className="row ">
              <div className="col-8">
                <p className="contact-user">
                  <i className="fas fa-user-circle"></i>{" "}
                  {this.state.lastMessage.user !== this.props.user
                    ? this.state.lastMessage.user
                    : "You"}
                </p>
              </div>
              <div className="col-4">
                <span className="contact-timestamp text-right">
                  {this.state.lastMessage.timestamp}
                </span>
              </div>
              <p className="contact-message">
                {this.state.lastMessage.message}
              </p>
            </div>
          </div>
        ) : (
          // if the component hasnt mounted just display loading text
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export default Contact;
