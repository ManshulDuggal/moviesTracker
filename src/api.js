const MOVIE_KEY = process.env.REACT_APP_MOVIE_API;
const base_url = "https://api.themoviedb.org/";
const Popular = `3/discover/movie?api_key=${MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`;

export const popularMovies = () => `${base_url}${Popular}`;


export const GetInfoMovie = (get_id) =>
  `${base_url}3/movie/${get_id}?api_key=${MOVIE_KEY}&language=en-US`;
export const GetReviewMovie = (get_id) =>
  `${base_url}3/movie/${get_id}/reviews?api_key=${MOVIE_KEY}&language=en-US`;

export const GetTrailers = (get_id) =>
  `${base_url}3/movie/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
