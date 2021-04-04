import axios from "axios";
import { INDEX_MOVIES } from "../actions/types";

export const indexMovies = (page, limit) => dispatch => {
  return axios.get(
    `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}`
  );
  // .then(res => res.data)
  // .then(res => dispatch({ payload: res.data.movies, type: INDEX_MOVIES }));
};

