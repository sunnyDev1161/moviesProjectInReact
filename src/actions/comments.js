import axios from "axios";

export const getComments = id => dispatch => {
  return axios.get(`https://yts.mx/api/v2/movie_comments.json?movie_id=${id}`);
};
 