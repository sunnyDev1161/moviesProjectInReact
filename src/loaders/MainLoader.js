import React from "react";
import "./MainLoader.css";
import bars from "../assests/images/bars.gif";
export default function MainLoader() {
  return (
    <div className="loader">
      <img alt="loading" src={bars} /> 
    </div>
  );
}
