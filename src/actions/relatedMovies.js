import axios from "axios";

export const getRelatedMovies = id => dispatch => {
  return axios.get(
    `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`
  );
};
