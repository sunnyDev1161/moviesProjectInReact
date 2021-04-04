import React from "react";
import "./Trailer.css";

export default function Trailer(props) {
  console.log(props.url);
  return (
    <div className="trailer">
      <iframe
        width="100%"
        height="315"
        src={"https://www.youtube.com/embed/" + props.url}
        frameborder="0"
        allowFullScreen
      />
    </div>
  );
}
