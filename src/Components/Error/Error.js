import React, { useEffect, useState } from "react";

import "./Error.css";

export default function Error(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="Error d-flex justify-content-center align-items-center flex-column">
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
        <span>.</span>
      </h1>
      <h3>We could not find the page you were looking for</h3>
    </div>
  );
}
