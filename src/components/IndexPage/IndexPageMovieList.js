import React from "react";
import "./IndexPage.css";

export default function IndexPageMovieList(props) {
  let movieList = null;
  movieList = props.moviesList.map(movie => {
    let bg_img = props.moviesList[0].background_image;
    return (
      <div
        className="coverPage_bg"
        style={{ backgroundImage: bg_img }}
        key={movie.id}
      >
        <div className="movie_poster">
          <div>
            <a onClick={() => props.onIndexMovieClicked(movie.id)}>
              <div className="imageReflection">
                <img src={movie.medium_cover_image} alt={movie.title} />
              </div>
            </a>
          </div>
          <p className="movie_title">
            {movie.title} {"  "}
            {movie.year}
          </p>
        </div>
      </div>
    );
  });
  return <div>{movieList}</div>;
}
