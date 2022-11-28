import React from "react";

import "./Error.css";

export default function Error(props) {
  return (
    <div className="Error container d-flex justify-content-center align-items-center flex-column">
      <section>
        <span>4</span>
        <span>0</span>
        <span>4</span>
        <span>.</span>
      </section>
      <hr />
      <h3>We could not find the page you were looking for</h3>
    </div>
  );
}
