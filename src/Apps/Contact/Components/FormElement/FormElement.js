import React from "react";

import "./FormElement.css";

class FormElement extends React.Component {
  render() {
    return (
      <div className="FormElement">
        {this.props.icon}
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default FormElement;