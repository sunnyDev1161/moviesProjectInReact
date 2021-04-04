import axios from "axios";

export const getMovieById = id => dispatch => {
  return axios.get(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
  );
};
