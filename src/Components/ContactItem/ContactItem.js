import React from "react";

import "./ContactItem.css";

class ContactItem extends React.Component {
  render() {
    return (
      <div className="ContactItem d-flex flex-column">
        <span className="title">{this.props.title}</span>
        <span className="information">
          {this.props.icon}
          {this.props.information}
        </span>
      </div>
    );
  }
}

export default ContactItem;
