import React from "react";

export default function Available(props) {
  const spanStyle = {
    background: "transparent",
    padding: "6px 4px",
    border: "1px solid white",
    margin: "5px 0 5px 4px"
  };
  const anchorTag = {
    textDecoration: "none",
    color: "white"
  };
  let avail = null;
  if (props.available !== undefined) {
    avail = props.available.map(quality => {
      return (
        <span style={spanStyle} key={quality}>
          <a href={quality.url} style={anchorTag}>
            {quality.quality}. {quality.type}
          </a>
        </span>
      );
    });
  }
  return <div>{avail}</div>;
}
