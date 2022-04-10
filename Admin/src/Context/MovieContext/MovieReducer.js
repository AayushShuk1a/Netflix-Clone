const MovieReducers = (state, action) => {
  switch (action.type) {
    case "GET_MOVIE_START":
      return { movies: [], isfetching: true, error: false };

    case "GET_MOVIE_SUCCESS":
      return { movies: action.payload, isfetching: false, error: false };

    case "GET_MOVIE_FAILURE":
      return { movies: [], isfetching: false, error: true };
  }
};

export default MovieReducers;
