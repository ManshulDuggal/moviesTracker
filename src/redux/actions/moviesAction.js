import axios from "axios";
import { popularMovies } from "../../api";

//action creator

export const moviesAction = () => async (dispatch) => {
  const popularMovieData = await axios.get(popularMovies());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popularMovies: popularMovieData.data.results,
    },
  });
};
