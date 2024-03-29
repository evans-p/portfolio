import React from "react";

import "./ContactTextArea.css";

class ContactTextArea extends React.Component {
  render() {
    return (
      <div className="ContactTextArea">
        <i className="bi bi-chat-fill"></i>
        <textarea
          className="message"
          placeholder="YOUR MESSAGE"
          name={this.props.name}
          value={this.props.value}
          onChange={(e) => {
            this.props.handleChange(e.target.value);
          }}
        ></textarea>
      </div>
    );
  }
}

export default ContactTextArea;
