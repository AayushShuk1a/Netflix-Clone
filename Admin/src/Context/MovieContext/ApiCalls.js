import axios from "axios";
import {
  GetMovieFailure,
  GetMoviesStart,
  GetMovieSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(GetMoviesStart());
  try {
    const res = await axios.get("/api/movie", {
      headers: {
        token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });

    dispatch(GetMovieSuccess(res.data));
  } catch (err) {
    dispatch(GetMovieFailure());
  }
};
