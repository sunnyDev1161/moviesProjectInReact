import React from "react";
import "./Screenshots.css";

export default function Screenshots(props) {
  console.log(props.screenShots);
  return (
    <div className="screenshots-container">
      <div className="screens">
        <a href={props.screenShots.screen1} target="_blank">
          <img alt="screen shot 1" src={props.screenShots.screen1} />
        </a>
      </div>
      <div className="screens">
        <a href={props.screenShots.screen2} target="_blank">
          <img alt="screen shot 1" src={props.screenShots.screen2} />
        </a>
      </div>
      <div className="screens">
        <a href={props.screenShots.screen3} target="_blank">
          <img alt="screen shot 1" src={props.screenShots.screen3} />
        </a>
      </div>
    </div>
  );
}
