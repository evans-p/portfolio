import React from "react";

import "./ContactFormElement.css";

class ContactFormElement extends React.Component {
  render() {
    return (
      <div className="ContactFormElement">
        {this.props.icon}
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default ContactFormElement;
