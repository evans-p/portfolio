import React from "react";

import "./ContactFormElement.css";

class ContactFormElement extends React.Component {
  render() {
    return (
      <div className="ContactFormElement">
        {this.props.icon}
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={(e) => {
            this.props.handleChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default ContactFormElement;
