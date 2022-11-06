import React from "react";

import "./Contacts.css";

import Item from "../Item/Item";
import FormElement from "../FormElement/FormElement";
import Textarea from "../TextArea/TextArea";

import MainButton from "../../../UtilComponents/MainButton/MainButton";

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
            return (
              <Item
                title={el[0]}
                icon={el[1]}
                information={el[2]}
                key={9999999 * Math.random()}
              />
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Contacts container">
        <div className="row">
          <div className="col-12 col-md-4 d-flex flex-column">
            {this.renderContactItems()}
          </div>
          <div
            className={
              this.props.width >= 768
                ? "form col-12 col-md-8 d-flex flex-column align-items-start"
                : "form col-12 col-md-8 d-flex flex-column align-items-start mt-1"
            }
          >
            <p>
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <FormElement
              type="text"
              placeholder="YOUR NAME"
              icon={<i className="bi bi-person-fill"></i>}
            />
            <FormElement
              type="email"
              placeholder="YOUR EMAIL"
              icon={<i className="bi bi-envelope-open-fill"></i>}
            />
            <Textarea />
            <MainButton
              icon={<i className="bi bi-send-fill"></i>}
              text={"send message"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
