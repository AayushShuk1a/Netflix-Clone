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

export const CreateMoviesStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const CreateMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const CreateMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILIURE",
});

export const DeleteMoviesStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const DeleteMovieSuccess = (movie) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: movie,
});

export const DeleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILIURE",
});
