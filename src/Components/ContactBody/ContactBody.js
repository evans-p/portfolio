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
          <form
            className={
              this.props.width >= 768
                ? "form col-12 col-md-8 d-flex flex-column align-items-start"
                : "form col-12 col-md-8 d-flex flex-column align-items-start mt-1"
            }
            onSubmit={this.props.handleOnContactSubmit}
          >
            <p>
              If you have any suggestion, project or even you want to say hello,
              please fill out the form below and I will reply you shortly.
            </p>
            <ContactFormElement
              type="text"
              placeholder="YOUR NAME"
              icon={<i className="bi bi-person-fill"></i>}
              name={"name"}
              value={this.props.name}
              handleChange={this.props.setName}
            />
            <ContactFormElement
              type="email"
              placeholder="YOUR EMAIL"
              icon={<i className="bi bi-envelope-open-fill"></i>}
              name={"email"}
              value={this.props.email}
              handleChange={this.props.setEmail}
            />
            <ContactTextArea
              name={"message"}
              value={this.props.message}
              handleChange={this.props.setMessage}
            />
            <MainButton
              icon={<i className="bi bi-send-fill"></i>}
              text={"send message"}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactBody;
