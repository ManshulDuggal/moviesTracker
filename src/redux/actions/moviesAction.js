import axios from "axios";
import { popularMovies, previewMovie } from "../../api";

//action creator

export const moviesAction = () => async (dispatch) => {
  const popularMovieData = await axios.get(popularMovies());
  const preview = await axios.get(previewMovie);
  console.log(preview);
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popularMovies: popularMovieData.data.results,
      previewMovie: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
    },
  });
};
