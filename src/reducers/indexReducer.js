import { INDEX_MOVIES } from "../actions/types";

const initialState = {
  indexMovies: []
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action && action.type) {
    case INDEX_MOVIES:
      return {
        ...state,
        indexMovies: action.payload
      };
    default:
      return state;
  }
}
