import React from "react";

import Header from "../Header/Header";
import ContactBody from "../ContactBody/ContactBody";

class Contact extends React.Component {
  render() {
    let headParameters = {
      titleMain: "GET",
      titleSecondary: "IN TOUCH",
      subtitle:
        "I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.",
    };

    return (
      <div className="Contact">
        <Header {...headParameters} />
        <ContactBody width={this.props.width} />
      </div>
    );
  }
}

export default Contact;
