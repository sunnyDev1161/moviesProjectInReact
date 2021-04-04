import React from "react";
import "./SearchMovie.css";

export default function SearchMovie(props) {
  let movies = null;
  if (props.movies !== null) {
    if (props.movies !== undefined) {
      const newArray = props.movies;
      console.log(newArray);
      movies = newArray.map(movie => {
        return (
          <tr
            key={movie.id}
            onClick={
              movie.id !== undefined
                ? () => props.onSearchMovieClicked(movie.id)
                : ""
            }
          >
            <td className="poster">
              <img alt={movie.title} src={movie.small_cover_image} />
            </td>
            <td className="movie-name">
              <span>{movie.title}</span>
            </td>
          </tr>
        );
      });
    } else {
      movies = (
        <tr>
          <td>No Movie Found</td>
        </tr>
      );
    }
  }
  return (
    <div>
      <table className="search-movie-container">
        <tbody>{movies}</tbody>
      </table>
    </div>
  );
}
