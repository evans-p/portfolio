import React from "react";

import Header from "../Header/Header";
import ContactBody from "../ContactBody/ContactBody";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <Header {...this.props.header} />
        <ContactBody width={this.props.width} data={this.props.data} />
      </div>
    );
  }
}

export default Contact;
