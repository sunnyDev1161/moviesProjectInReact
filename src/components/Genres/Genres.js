import React from "react";

export default function Genres(props) {
  let genres = null;

  if (props.genres !== null) {
    genres = props.genres.map(gen => {
      console.log(gen);
      return <span key={gen}>{gen} /</span>;
    });
  }
  return <div>{genres}</div>;
}
