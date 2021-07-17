import { combineReducers } from "redux";

import { movieReducer } from "./moviesReducer";

import detailReducer from "./detailReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  movies: movieReducer,

  detail: detailReducer,

  favorites: favoritesReducer,
});

export default rootReducer;
