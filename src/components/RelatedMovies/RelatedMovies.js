import React from "react";
import "./RelatedMovies.css";

export default function RelatedMovies(props) {
  console.log(props);
  let relatedMovies = null;
  if (props.relatedMovies !== null) {
    relatedMovies = props.relatedMovies.map(movie => {
      // small_cover_image
      return (
        <a
          key={movie.id}
          onClick={() => {
            // console.log(12312);
            props.onSimilarMovieClicked(movie.id);
          }}
        >
          <img src={movie.medium_cover_image} alt={movie.name} />
        </a>
      );
    });
  } else {
  }
  return (
    <div className="related-movies">
      <h1>Similar Movies</h1>
      {relatedMovies}
    </div>
  );
}
