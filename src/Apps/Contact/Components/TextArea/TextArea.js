import React from "react";

import "./TextArea.css";

class Textarea extends React.Component {
  render() {
    return (
      <div className="TextArea">
        <i class="bi bi-chat-fill"></i>
        <textarea className="message" placeholder="YOUR MESSAGE"></textarea>
      </div>
    );
  }
}

export default Textarea;
