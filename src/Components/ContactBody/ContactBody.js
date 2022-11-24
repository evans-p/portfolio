import React from "react";

import "./ContactBody.css";

import ContactItem from "../ContactItem/ContactItem";
import ContactFormElement from "../ContactFormElement/ContactFormElement";
import ContactTextArea from "../ContactTextArea/ContactTextArea";
import MainButton from "../MainButton/MainButton";

class ContactBody extends React.Component {
  renderContactItems() {
    return (
      <div className="row">
        <div className="col d-flex flex-column ">
          {this.props.data.map((el) => {
            return (
              <ContactItem
                title={el[0]}
                icon={el[1]}
                information={el[2]}
                key={999999999 * Math.random()}
              />
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="ContactBody container">
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
              If you have any suggestion, project or even you want to say hello,
              please fill out the form below and I will reply you shortly.
            </p>
            <ContactFormElement
              type="text"
              placeholder="YOUR NAME"
              icon={<i className="bi bi-person-fill"></i>}
            />
            <ContactFormElement
              type="email"
              placeholder="YOUR EMAIL"
              icon={<i className="bi bi-envelope-open-fill"></i>}
            />
            <ContactTextArea />
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

export default ContactBody;
