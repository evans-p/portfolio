import React from "react";

import "./Contacts.css";

import Item from "../Item/Item";
import FormElement from "../FormElement/FormElement";

class Contacts extends React.Component {
  renderContactItems() {
    let data = [
      ["Telephone1", <i className="bi bi-telephone"></i>, "+30 6978 418 570"],
      ["Telephone2", <i className="bi bi-telephone"></i>, "+30 6978 418 570"],
      ["Telephone3", <i className="bi bi-telephone"></i>, "+30 6978 418 570"],
      ["Telephone4", <i className="bi bi-telephone"></i>, "+30 6978 418 570"],
    ];

    return (
      <div className="row">
        <div className="col d-flex flex-column ">
          {data.map((el) => {
            return <Item title={el[0]} icon={el[1]} information={el[2]} />;
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Contacts container">
        <div className="row">
          <div className="col-4 d-flex flex-column">
            {this.renderContactItems()}
          </div>
          <div className="form col-8 d-flex flex-column align-items-center">
            <p>
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <FormElement
              placeholder="YOUR NAME"
              icon={<i className="bi bi-person-fill"></i>}
            />
            <FormElement
              placeholder="YOUR EMAIL"
              icon={<i className="bi bi-envelope-open-fill"></i>}
            />
            <textarea></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
