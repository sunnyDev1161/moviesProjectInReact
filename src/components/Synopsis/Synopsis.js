import React from "react";
import "./Synopsis.css";
import Cast from "../Cast/Cast";

const Synopsis = props => {
  if (props.synopsis !== undefined) {
    var synopsis = <p>{props.synopsis}</p>;
  }
  return ( 
    <div className="synopsis">
      <div className="details">
        <h1>Description</h1>
        <p>{synopsis}</p>
      </div>
      {/* <div className="details">
        <Cast />
      </div> */}
    </div>
  );
};

export default Synopsis;
