import axios from "axios";

export const searchMovie = query => dispatch => {
  return axios.get(
    `https://yts.mx/api/v2/list_movies.json.json?query_term=${query}`
  );
};
