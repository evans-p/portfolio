import React from "react";

import "./Contact.css";

import Head from "./Components/Head/Head";
import Contacts from "./Components/Contacts/Contacts";

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
        <Head {...headParameters} />
        <Contacts width={this.props.width} />
      </div>
    );
  }
}

export default Contact;
