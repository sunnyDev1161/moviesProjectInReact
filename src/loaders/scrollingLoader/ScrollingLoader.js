import React from "react";
import "./ScrollingLoader.css";
import scrollingLoader from "../../assests/images/scrollingLoader2.gif";

export default function ScrollingLoader() {
  return (
    <div>
      <img alt="Loading..." src={scrollingLoader} className="scrolling" />
    </div>
  );
}
