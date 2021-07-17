const initState = {
  popularMovies: [],

  preview: [],
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        preview: action.payload.previewMovie,
      };
    default:
      return { ...state };
  }
};
