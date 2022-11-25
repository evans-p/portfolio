import React from "react";

import Header from "../Header/Header";
import ContactBody from "../ContactBody/ContactBody";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <Header {...this.props.header} />
        <ContactBody
          width={this.props.width}
          data={this.props.data}
          name={this.props.name}
          setName={this.props.setName}
          email={this.props.email}
          setEmail={this.props.setEmail}
          message={this.props.message}
          setMessage={this.props.setMessage}
          handleOnContactSubmit={this.props.handleOnContactSubmit}
        />
      </div>
    );
  }
}

export default Contact;
