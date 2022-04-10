export const GetMoviesStart = () => ({
  type: "GET_MOVIE_START",
});

export const GetMovieSuccess = (movie) => ({
  type: "GET_MOVIE_SUCCESS",
  payload: movie,
});

export const GetMovieFailure = () => ({
  type: "GET_MOVIE_FAILIURE",
});
